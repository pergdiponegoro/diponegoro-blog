"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";

export const navigationItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Visi & Misi",
    href: "/visimisi",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const logoSrc = "/images/logo.png"; // Path to your logo image

  return (
    <nav className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex items-center justify-between">
      {/* Logo and Title */}
      <div className="flex items-center">
        <Link href="/">
          {/* Logo */}
          <img
            src={logoSrc}
            alt="Logo"
            className="h-20 mr-2" // Adjust height and margin as needed
          />
        </Link>
        <Link href="/">
          <div>
            <h1 className="text-xl font-bold">PERG DIPONEGORO</h1>
            <h2 className="text-xl font-bold text-center">KISARAN</h2>
          </div>
        </Link>
      </div>

      {/* Centered Navigation Menu */}
      <div className="flex-grow hidden sm:flex justify-center">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    active={pathname === item.href}
                    className={`${navigationMenuTriggerStyle()} transition-colors duration-300 hover:text-primary text-gray-700`}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Contact Button and Mobile Menu */}
      <div className="flex items-center">
        {/* Get In Touch Button as a link */}
        <Link href="#footer">
          <Button className="hidden sm:block bg-primary text-white hover:bg-primary-dark transition duration-300 px-4 py-2 rounded-lg">
            Get In Touch
          </Button>
        </Link>


        {/* Mobile Menu (Visible on small screens) */}
        <div className="sm:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
