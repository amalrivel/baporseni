// src/app/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { format } from "date-fns";

export const metadata: Metadata = {
  title: "Baporseni PT Timah",
  description: "Portal resmi Baporseni PT Timah Tbk",
};

export default async function Home() {
  const [branches, events, news] = await Promise.all([
    prisma.branch.findMany(),
    prisma.event.findMany({ orderBy: { startDate: "asc" }, take: 3 }),
    prisma.news.findMany({ orderBy: { publishedAt: "desc" }, take: 3 }),
  ]);

  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">
          Selamat Datang di Baporseni PT Timah Tbk
        </h1>
        <p className="text-lg text-gray-700">
          Portal resmi untuk olahraga dan seni di PT Timah Tbk
        </p>
      </section>

      {/* Branches Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Cabang Baporseni</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {branches.map(branch => (
            <Link
              key={branch.id}
              href={`/branches/${branch.id}`}
              className="border rounded-lg p-4 hover:shadow text-center"
            >
              <h3 className="text-xl font-medium">{branch.name}</h3>
              {branch.description && (
                <p className="text-gray-600 mt-2">{branch.description}</p>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Kegiatan Mendatang</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map(event => (
            <Link
              key={event.id}
              href={`/events/${event.id}`}
              className="border rounded-lg p-4 hover:shadow"
            >
              <h3 className="text-xl font-medium mb-2">{event.title}</h3>
              <p className="text-gray-600">
                {format(new Date(event.startDate), "dd MMM yyyy")}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Berita Terbaru</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {news.map(item => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="border rounded-lg p-4 hover:shadow"
            >
              <h3 className="text-xl font-medium mb-2">{item.title}</h3>
              <p className="text-gray-600">
                {format(new Date(item.publishedAt), "dd MMM yyyy")}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
