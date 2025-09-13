import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

const uri: string = process.env.MONGODB_URI;
const options = {
  tls: true,
  tlsAllowInvalidCertificates: true, // Only for development environments
  tlsAllowInvalidHostnames: true,    // Only for development environments
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect().catch(err => {
      console.error('Failed to connect to MongoDB in development:', err);
      throw err;
    });
  }
  clientPromise = global._mongoClientPromise;
} else {
  // For production, use stricter SSL settings
  const prodOptions = {
    tls: true,
  };
  client = new MongoClient(uri, prodOptions);
  clientPromise = client.connect().catch(err => {
    console.error('Failed to connect to MongoDB in production:', err);
    throw err;
  });
}

export default clientPromise;