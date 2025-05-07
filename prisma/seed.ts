// prisma/seed.ts
// ESM TypeScript script for seeding data

import { PrismaClient, RoleName, NewsCategory } from '../generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Clean up existing data
  await prisma.branchStaff.deleteMany();
  await prisma.photo.deleteMany();
  await prisma.gallery.deleteMany();
  await prisma.registration.deleteMany();
  await prisma.event.deleteMany();
  await prisma.news.deleteMany();
  await prisma.user.deleteMany();
  await prisma.category.deleteMany();
  await prisma.branch.deleteMany();
  await prisma.role.deleteMany();

  // Seed Roles
  const [adminRole, staffRole, memberRole] = await Promise.all([
    prisma.role.create({ data: { name: RoleName.ADMIN } }),
    prisma.role.create({ data: { name: RoleName.STAFF } }),
    prisma.role.create({ data: { name: RoleName.MEMBER } }),
  ]);

  // Seed Branches
  const [soccerBranch, badmintonBranch, swimmingBranch] = await Promise.all([
    prisma.branch.create({ data: { name: 'Sepak Bola', description: 'Cabang sepak bola Baporseni' } }),
    prisma.branch.create({ data: { name: 'Bulu Tangkis', description: 'Cabang bulu tangkis Baporseni' } }),
    prisma.branch.create({ data: { name: 'Renang', description: 'Cabang renang Baporseni' } }),
  ]);

  // Seed Users
  const passwordAdmin = await bcrypt.hash('admin123', 10);
  const passwordStaff = await bcrypt.hash('staff123', 10);
  const [adminUser, soccerCoach] = await Promise.all([
    prisma.user.create({
      data: {
        name: 'Administrator',
        email: 'admin@timah.co.id',
        password: passwordAdmin,
        roleId: adminRole.id,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Pelatih Sepak Bola',
        email: 'coach.soccer@timah.co.id',
        password: passwordStaff,
        roleId: staffRole.id,
        phone: '081234567890',
      },
    }),
  ]);

  // Assign Staff to Branch
  await prisma.branchStaff.create({
    data: { branchId: soccerBranch.id, userId: soccerCoach.id },
  });

  // Seed Categories
  const [olahragaCat, seniCat, umumCat] = await Promise.all([
    prisma.category.create({ data: { name: 'Olahraga' } }),
    prisma.category.create({ data: { name: 'Seni' } }),
    prisma.category.create({ data: { name: 'Umum' } }),
  ]);

  // Seed Events
  await prisma.event.create({
    data: {
      title: 'Latihan Sepak Bola Mingguan',
      description: 'Latihan rutin setiap minggu',
      location: 'Lapangan Utama',
      startDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      quota: 20,
      categoryId: olahragaCat.id,
      branchId: soccerBranch.id,
      createdById: adminUser.id,
    },
  });

  // Seed News
  await prisma.news.createMany({
    data: [
      {
        authorId: adminUser.id,
        branchId: soccerBranch.id,
        title: 'Pembukaan Musim Baru',
        content: 'Musim olahraga dan seni 2025 resmi dibuka.',
        category: NewsCategory.UMUM,
      },
      {
        authorId: soccerCoach.id,
        branchId: soccerBranch.id,
        title: 'Jadwal Latihan Pertama',
        content: 'Latihan pertama cabang sepak bola akan dimulai minggu depan.',
        category: NewsCategory.OLAHRAGA,
      },
    ],
  });

  console.log('✅ Seed data berhasil dimasukkan');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
