This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, pull the source code from repository:

```bash
git clone https://github.com/vutrv/restaurant-trpc-next.git

# cd to restaurant-trpc-next folder
# check nodejs version, should be at least version 18xx, particularly 18.19.0 in this project
node -v

# install dependencies
npm install

# generate prisma client
npm run prisma-generate

# run development
npm run dev

# build production
npm run build

# run production
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database

Postgres DB is hosting on [http://render.com](http://render.com). The mock data is already created.
Database information in `DIRECT_DATABASE_URL` variable in `.env` file. You can use database tool management (like DBeaver) to connect hosting db to see the data. 

The migration file can be found in `src/prisma/migrations` folder. 
You can reset all data, remove or add migration by running these scripts in `src` folder: 

```bash
# reset data
npx prisma migrate reset

# remove migrations
rm -rf prisma/migrations

# create new migration 
npx prisma migrate dev --name init

# in root folder, can add mock data to db
npm run seed
```

## tRPC

[tRPC integration with NextJS steps](https://trpc.io/docs/client/nextjs) and [tRPC Edge Runtimes Adapter](https://trpc.io/docs/server/adapters/fetch) are use for setting
up API routing alternative to traditional REST or GraphQL

## UI/UX

[UI/UX reference Figma design](https://www.figma.com/design/rcomlVLL8LS3xfUVSXkCUY/Seoul-Comix-Full-Stack-Applicant-Coding-Test-Assignment--Design-Material?t=oPJzB3SIA2Zvk79X-0)

Image handler wil show the image from API and represent Image Placeholder for Error Response API (some API error with mock data)
This project uses [`Font Awesome`](https://fontawesome.com/) for custom and display icons, CSS module for style and Responsive

## API Routing
API definition can be found in `pages/api/trpc/[trpc].tsx`, with `getRestaurants` & `addFavorite` router configuration.

