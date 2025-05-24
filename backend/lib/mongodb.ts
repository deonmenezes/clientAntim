import { MongoClient, ServerApiVersion, Db } from 'mongodb';

// Use only the MongoDB Atlas connection string from .env
const uri = "mongodb+srv://deonmenezescodes:FGhRQIEFbDZKFEAd@clientantim.aavbikq.mongodb.net/";

if (!uri) {
  throw new Error('MONGODB_URI environment variable is not set. Please set it to your MongoDB Atlas connection string.');
}

// Now TypeScript knows uri is defined (not undefined)
const connectionUri: string = uri;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(connectionUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Cache connection for better performance
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
  // If we have cached values, use them
  if (cachedClient !== null && cachedDb !== null) {
    return { client: cachedClient, db: cachedDb };
  }

  // Otherwise, connect to the database
  try {
    // Mask the password in the connection string for logging purposes
    const logUri = connectionUri.includes('@') 
      ? connectionUri.substring(0, connectionUri.indexOf('://') + 3) + '***:***@' + connectionUri.substring(connectionUri.indexOf('@') + 1)
      : connectionUri;
    
    console.log('Attempting to connect to MongoDB Atlas with URI:', logUri);
    
    // Connect the client to the server
    await client.connect();
    
    // Get the database name from the connection string or use default
    let dbName = 'clientAntim'; // Default database name
    
    // Parse the database name from the Atlas URI
    if (connectionUri.includes('mongodb+srv://')) {
      const dbNameParts = connectionUri.split('/');
      const lastPart = dbNameParts.pop() || '';
      const dbParts = lastPart.split('?');
      if (dbParts[0] && dbParts[0].length > 0) {
        dbName = dbParts[0];
      }
    }
    
    console.log('Using database:', dbName);
    
    // Get a reference to the database
    const db = client.db(dbName);
    
    // Cache the connection
    cachedClient = client;
    cachedDb = db;
    
    console.log('Successfully connected to MongoDB Atlas');
    return { client, db };
  } catch (e) {
    console.error('Failed to connect to MongoDB Atlas:', e);
    throw e; // Re-throw the error so it doesn't silently fail
  }
}