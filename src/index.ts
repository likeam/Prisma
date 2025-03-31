import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createMovie() {
  const newMovie = await prisma.movie.create({
    data: {
      title: "Hard Target",
      description: " A great   action and jungle story",
      genre: "Action",
      releaseDate: new Date("1994-02-11"),
      rating: 9.4,
    },
  });
  console.log(newMovie);
}

async function createMultipleMovies() {
  const multipleNewMovies = await prisma.movie.createMany({
    data: [
      {
        title: "Delta Force",
        description: " A beautiful comedy story",
        genre: "Comedy",
        releaseDate: new Date("1998-11-18"),
        rating: 6.2,
      },
      {
        title: "Red",
        description: " A great action and suspense movie",
        genre: "Action",
        releaseDate: new Date("2004-04-20"),
        rating: 6.1,
      },
      {
        title: "Vertical Limits",
        description: "A  nice advanture story",
        genre: "Advanture",
        releaseDate: new Date("1999-12-24"),
        rating: 7.1,
      },
      {
        title: "End of Days",
        description: " A nice Horror and Action moveie",
        genre: "Horror",
        releaseDate: new Date("1999-12-25"),
        rating: 8.2,
      },
    ],
  });
}

async function getAllMovies() {
  const movies = await prisma.movie.findMany();
  console.log("All Movies", movies);
}

async function main() {
  //   await createMovie();
  //   await createMultipleMovies();
  await getAllMovies();
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
