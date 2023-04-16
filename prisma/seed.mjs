import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.createMany({
    data: {
      username: 'candra',
      name: 'Candra Herdiana',
      password: '$2b$10$3kOeJ9VhnAORvyyIqCTNpe05ACAdh/boYnHjUkuMcaGoPfPd/zHBu',
    },
  })

  console.error({ user })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
