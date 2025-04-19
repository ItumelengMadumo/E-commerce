import { PrismaClient } from "@prisma/client"
import { hashPassword } from "../lib/auth"

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const adminPassword = await hashPassword("admin123")

  await prisma.admin.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      email: "admin@example.com",
      password: adminPassword,
    },
  })

  console.log("Admin user created: admin@example.com / admin123")

  // Create sample products
  const products = [
    {
      title: "Wireless Headphones",
      description: "Premium wireless headphones with noise cancellation and long battery life.",
      price: 129.99,
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      stock: 50,
    },
    {
      title: "Smart Watch",
      description: "Track your fitness, receive notifications, and more with this stylish smart watch.",
      price: 199.99,
      imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      stock: 30,
    },
    {
      title: "Laptop Backpack",
      description: "Durable and water-resistant backpack with padded compartments for your laptop and accessories.",
      price: 59.99,
      imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      stock: 100,
    },
  ]

  for (const product of products) {
    await prisma.product.create({
      data: product,
    })
  }

  console.log("Sample products created")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
