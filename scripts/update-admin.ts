import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const userId = '92gbkKuCpVWLBKyOe24VhbycX1L7moh4'
  
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { role: 'admin' }
    })
    
    console.log('Successfully updated user to admin:', updatedUser)
  } catch (error) {
    console.error('Error updating user:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main() 