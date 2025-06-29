import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import { Icon } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-white py-12 md:mt-20 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-3 font-poppins md:grid-cols-3 lg:grid-cols-6 md:mx-20">
          <div className="md:ml-10 md:mr-28 lg:col-span-2">
            <Link
              href="/"
              className="text-4xl font-medium text-slate-900 mb-4 block"
            >
              Jadoo.
            </Link>
            <p className="text-slate-600 mb-6 text-xs font-medium">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl text-slate-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-slate-600 font-medium hover:text-slate-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 font-medium hover:text-slate-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 font-medium hover:text-slate-900">
                  Mobile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl text-slate-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-slate-600 font-medium hover:text-slate-900">
                  Help/FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 font-medium hover:text-slate-900">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 font-medium hover:text-slate-900">
                  Affilates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl text-slate-900 mb-4">More</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-slate-600 font-medium hover:text-slate-900">
                  Airlinefees
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 font-medium hover:text-slate-900">
                  Airline
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 font-medium hover:text-slate-900">
                  Low fare tips
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1 flex flex-col items-center space-y-2 mt-8 md:mt-0">
            {/* Social Icons */}
            <div className="flex space-x-2">
              <Link href="#" className="text-slate-400 hover:text-slate-600">
                {/* <Facebook className="w-5 h-5" /> */}
                <Icon name="Facebook" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-slate-600">
                {/* <Instagram className="w-5 h-5" /> */}
                <Icon name="Instagram" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-slate-600">
                {/* <Twitter className="w-5 h-5" /> */}
                <Icon name="Twitter" />
              </Link>
            </div>

            {/* Discover Text */}
            <div className="text-lg font-medium text-slate-600">Discover our app</div>

            {/* App Images */}
            <div className="flex space-x-2">
              {/* <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Get it on Google Play"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Available on the App Store"
                width={120}
                height={40}
                className="h-10 w-auto"
              /> */}
              <Icon name="Googleplay" />
              <Icon name="AppleStore" />
            </div>
          </div>
        </div>

        <div className=" mt-4 pt-8 text-center">
          <p className="text-slate-600 font-medium text-sm">
            All rights reserved@jadoo.co
          </p>
        </div>
      </div>
    </footer>
  );
}
