import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { router, publicProcedure } from '@/server/trpc';
import type { NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';
import { Restaurant } from '@/types/restaurant';
import { z } from 'zod';

const prisma = new PrismaClient().$extends(withAccelerate());

const AddFavoriteSchema = z.object({
  id: z.number().int(),
  is_favorite: z.boolean(),
});

const appRouter = router({
  getRestaurants: publicProcedure.query(async () => {
    const restaurants = await prisma.restaurant.findMany({
      orderBy: {
        id: 'asc' // Sort by id in ascending order
      }
    }) as unknown as Restaurant[];
    return restaurants;
  }),

  addFavorite: publicProcedure
  .input(AddFavoriteSchema)
  .mutation(async ({ input }) => {
    const { id, is_favorite } = input;
    await prisma.restaurant.update({
      where: { id },
      data: { is_favorite }
    });
    return { success: true };
  }),
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
    createContext: () => ({})
  });
}