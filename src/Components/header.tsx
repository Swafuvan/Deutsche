import Link from "next/link";
import { Button } from "@/Components/ui/button";
import Image from "next/image";

export function Header() {
  return (
    <header className="w-full px-20 py-4 flex justify-between items-center">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-black ">
          <Image
            alt="Logo Icon"
            width={115}
            height={115}
            src="/images/Logo.png"
          />
        </Link>

        <nav className="hidden md:flex justify-between items-center space-x-16">
          <Link
            href="#destinations"
            className="text-black hover:text-black font-semibold transition-colors"
          >
            Destinations
          </Link>
          <Link
            href="#hotels"
            className="text-black hover:text-black font-semibold transition-colors"
          >
            Hotels
          </Link>
          <Link
            href="#flights"
            className="text-black hover:text-black font-semibold transition-colors"
          >
            Flights
          </Link>
          <Link
            href="#bookings"
            className="text-black hover:text-black font-semibold transition-colors"
          >
            Bookings
          </Link>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-black hover:text-black font-semibold "
            >
              Login
            </Button>
            <Button className="text-black border border-black hover:text-white hover:bg-black bg-transparent px-6">
              Sign up
            </Button>
            <Button variant="ghost" size="sm" className="text-black font-semibold ">
              EN
              <Image width={10} height={10} src='/images/Vector-1.png' alt="icon" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
