"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { services, solutions } from "@/lib/data";
import logo from "../assets/images/logo.png";
export function Header() {
  return (
    <div className="w-full flex justify-around items-center p-4 fixed top-0 left-0 z-50 ">
      <div>
        <Image
          src={logo || "/placeholder.svg"}
          alt="Logo"
          width={70}
          height={70}
          className="object-contain rounded-full"
        />
      </div>
      <div className="w-[600px] h-[50px] flex items-center justify-center">
        <NavigationMenu>
          <NavigationMenuList className="gap-x-4">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="hover:underline font-semibold ">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-semibold">
                Our Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-4 w-[300px] lg:w-[450px] rounded-lg">
                  {services.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-semibold">
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-4 w-[300px] lg:w-[450px] rounded-lg">
                  {solutions.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/portfolio" legacyBehavior passHref>
                <NavigationMenuLink className="hover:underline font-semibold ">
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="hover:underline font-semibold ">
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-black hover:text-white focus:bg-[#FFDAB3] focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
