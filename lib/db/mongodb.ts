// lib/db/mongodb.ts
import { MongoClient, Db } from 'mongodb'

// Declare global augmentation for cached connection
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

let clientPromise: Promise<MongoClient> | null = null

function getClientPromise(): Promise<MongoClient> {
  if (clientPromise) return clientPromise

  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
  }
  if (!process.env.MONGODB_DB_NAME) {
    throw new Error('Please define the MONGODB_DB_NAME environment variable inside .env.local')
  }

  if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = new MongoClient(uri, {}).connect()
    }
    clientPromise = global._mongoClientPromise
  } else {
    clientPromise = new MongoClient(uri, {}).connect()
  }

  return clientPromise
}

/**
 * Get the primary MongoDB database instance
 * Uses cached connection in serverless environments
 */
export async function getDB(): Promise<Db> {
  try {
    const client = await getClientPromise()
    return client.db(process.env.MONGODB_DB_NAME)
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    throw error
  }
}

/**
 * Get the AI-specific MongoDB database instance
 * Currently points to the same database, but can be configured differently
 */
export async function getDBAI(): Promise<Db> {
  try {
    const client = await getClientPromise()
    return client.db(process.env.MONGODB_DB_NAME)
  } catch (error) {
    console.error('Error connecting to AI MongoDB:', error)
    throw error
  }
}

/**
 * Get the MongoDB client for administrative operations
 */
export async function getClient(): Promise<MongoClient> {
  return getClientPromise()
}

/**
 * Test the MongoDB connection
 */
export async function testConnection(): Promise<boolean> {
  try {
    const client = await getClientPromise()
    await client.db(process.env.MONGODB_DB_NAME).command({ ping: 1 })
    console.log('✅ Successfully connected to MongoDB')
    return true
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error)
    return false
  }
}

export default getClientPromise
