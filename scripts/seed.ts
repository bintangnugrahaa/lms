const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Web Development" },
        { name: "Mobile App Development" },
        { name: "Algorithm Design" },
        { name: "Database Management" },
        { name: "Software Engineering" },
        { name: "Programming Languages" },
        { name: "Cybersecurity" },
    ]    
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();