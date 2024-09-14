import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function seedRestaurant() {
  const filePath = path.join(__dirname, '../mock/restaurant.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  try {
    for (const restaurant of data) {
      const { 
        id,
        name,
        category,
        city,
        rating,
        rating_count,
        desc,
        price_range,
        isFavorite,
        images,
        featured
       } = restaurant;

       await prisma.restaurant.create({
        data: {
          res_id: id,
          name,
          category,
          city,
          rating,
          rating_count,
          description: desc,
          price_range,
          is_favorite: isFavorite,
          images,
          featured
        }
       })

       console.log('Seeding completed successfully!');
    }
  } catch (err) {
    console.log('Error seeding data: ', err);
  } finally {
    await prisma.$disconnect();
  }
}

seedRestaurant();