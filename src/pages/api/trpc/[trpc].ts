import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { router, publicProcedure } from '@/server/trpc';
import type { NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';

const prisma = new PrismaClient().$extends(withAccelerate());

const appRouter = router({
  getRestaurants: publicProcedure.query(async () => {
    const restaurants = await prisma.restaurant.findMany() as unknown as {
      id: number;
      name: string;
      res_id: string;
      category: string;
      city: string;
      rating: number;
      rating_count: number;
      description: string;
      price_range: string;
      is_favorite: boolean;
      images: string[];
      featured: {
        icon: string;
        text: string;
      };
    }[];;
    return restaurants;
  })
});

export type AppRouter = typeof appRouter;

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    router: appRouter,
    req,
    createContext: () => ({}),
  });
}