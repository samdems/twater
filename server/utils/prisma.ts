import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool, neonConfig } from '@neondatabase/serverless'
import ws from 'ws'

// Configure WebSocket for Node.js environment
// This is required for Node v21 and below, and for serverless environments
if (!neonConfig.webSocketConstructor) {
  neonConfig.webSocketConstructor = ws
}

const prismaClientSingleton = () => {
  // Prisma 7 requires an adapter for serverless environments
  const connectionString = process.env.DATABASE_URL
  
  if (!connectionString) {
    throw new Error('DATABASE_URL environment variable is not set')
  }
  
  // Ensure connectionString is actually a string
  if (typeof connectionString !== 'string') {
    throw new Error(`DATABASE_URL must be a string, but received: ${typeof connectionString}`)
  }
  
  // Create pool with explicit string connectionString
  const pool = new Pool({ 
    connectionString: connectionString.trim()
  })
  
  const adapter = new PrismaNeon(pool)
  
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
