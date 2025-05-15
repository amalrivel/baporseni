// src/app/(app)/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Baporseni PT Timah",
  description: "Portal resmi Baporseni PT Timah Tbk",
};

export default async function Home() {
  const [branches, events, news] = await Promise.all([
    prisma.branch.findMany(),
    prisma.event.findMany({
      orderBy: { startDate: "asc" },
      take: 3,
      where: { startDate: { gte: new Date() } },
    }),
    prisma.news.findMany({ orderBy: { publishedAt: "desc" }, take: 3 }),
  ]);

  return (
    <div className="space-y-16 pb-6">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Baporseni PT Timah Tbk
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Wadah kreativitas olahraga dan seni untuk seluruh karyawan PT Timah
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/events">Lihat Kegiatan</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/branches">Jelajahi Cabang</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Cabang Baporseni</h2>
          <Button variant="ghost" size="sm" className="gap-2" asChild>
            <Link href="/branches">
              Lihat Semua
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {branches.map((branch) => (
            <Link
              key={branch.id}
              href={`/branches/${branch.id}`}
              className="group relative overflow-hidden rounded-xl border bg-background p-6 hover:shadow-md transition-all hover:border-primary/50"
            >
              <div className="flex flex-col h-full space-y-2">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                  {/* Icon placeholder - you can replace this with actual icons for each branch */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 2v6.5l5-3.5"></path>
                    <path d="M12 15.5V20"></path>
                    <path d="M14 12.75 21 16l-7 3.5-7-3.5 7-3.5"></path>
                  </svg>
                </div>
                <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
                  {branch.name}
                </h3>
                {branch.description && (
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {branch.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Kegiatan Mendatang</h2>
          <Button variant="ghost" size="sm" className="gap-2" asChild>
            <Link href="/events">
              Lihat Semua
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.length > 0 ? (
            events.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="group block rounded-xl border bg-background overflow-hidden hover:shadow-md transition-all hover:border-primary/50"
              >
                <div className="aspect-video relative bg-muted">
                  {/* Placeholder image - replace with actual event images */}
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary/70"
                    >
                      <rect
                        width="18"
                        height="18"
                        x="3"
                        y="4"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" x2="16" y1="2" y2="6"></line>
                      <line x1="8" x2="8" y1="2" y2="6"></line>
                      <line x1="3" x2="21" y1="10" y2="10"></line>
                    </svg>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex gap-2 items-center mb-2 text-sm text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        width="18"
                        height="18"
                        x="3"
                        y="4"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" x2="16" y1="2" y2="6"></line>
                      <line x1="8" x2="8" y1="2" y2="6"></line>
                      <line x1="3" x2="21" y1="10" y2="10"></line>
                    </svg>
                    <span>
                      {format(new Date(event.startDate), "dd MMMM yyyy")}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium mb-1 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  {event.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
                      {event.description}
                    </p>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-3 text-center py-12 bg-muted/30 rounded-xl">
              <p className="text-muted-foreground">
                Belum ada kegiatan mendatang yang terjadwal.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Latest News */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Berita Terbaru</h2>
          <Button variant="ghost" size="sm" className="gap-2" asChild>
            <Link href="/news">
              Lihat Semua
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="group block rounded-xl border bg-background overflow-hidden hover:shadow-md transition-all hover:border-primary/50"
            >
              <div className="aspect-video relative bg-muted">
                {/* Placeholder image - replace with actual news images */}
                <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary/70"
                  >
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                    <path d="M18 14h-8"></path>
                    <path d="M15 18h-5"></path>
                    <path d="M10 6h8v4h-8V6Z"></path>
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <div className="flex gap-2 items-center mb-2 text-sm text-muted-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>
                    {format(new Date(item.publishedAt), "dd MMMM yyyy")}
                  </span>
                </div>
                <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
                  {item.content}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
