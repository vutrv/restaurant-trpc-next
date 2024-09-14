-- CreateTable
CREATE TABLE "Restaurant" (
    "id" SERIAL NOT NULL,
    "res_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "rating_count" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "price_range" TEXT NOT NULL,
    "is_favorite" BOOLEAN NOT NULL,
    "images" JSONB NOT NULL,
    "featured" JSONB NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);
