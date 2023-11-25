import { Redis } from "ioredis";
import "dotenv/config";

const redis = new Redis({
  host: process.env.REDIS_HOST, 
  port: Number(process.env.REDIS_PORT),
});

redis.on('connect', () => {
    console.log('Conectado ao Redis!');
  });
  
  redis.on('error', (error) => {
    console.error('Erro de conexão ao Redis:', error);
  });

export { redis };
