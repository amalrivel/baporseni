import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header & Navbar */}
      <header className="border-b sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl hidden md:inline-block">Baporseni</span>
          </Link>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/cabang" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Cabang
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/berita" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Berita
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/kegiatan"  passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Kegiatan
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/galeri" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Galeri
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/kontak" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Kontak
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button variant="default" size="sm" className="hidden sm:flex">
              Login
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto py-8 px-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/40">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium text-lg mb-4">Baporseni PT Timah</h3>
              <p className="text-muted-foreground">
                Wadah kegiatan olahraga dan seni untuk karyawan PT Timah Tbk.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Link Cepat</h3>
              <ul className="space-y-2">
                <li><Link href="/news" className="text-muted-foreground hover:text-foreground transition-colors">Berita</Link></li>
                <li><Link href="/events" className="text-muted-foreground hover:text-foreground transition-colors">Kegiatan</Link></li>
                <li><Link href="/galeri" className="text-muted-foreground hover:text-foreground transition-colors">Galeri</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Kontak</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Kontak</h3>
              <address className="not-italic text-muted-foreground">
                <p>Jl. Jenderal Sudirman No. 51</p>
                <p>Pangkalpinang, Bangka Belitung</p>
                <p>Email: baporseni@timah.co.id</p>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Baporseni PT Timah Tbk. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}