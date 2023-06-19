"use client";

import NextLink from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ToggleTheme from "@/components/toggle-theme";

import cx from "@/lib/cx";
import Container from "@/components/ui/container";
import Link from "next/link";

const MENU = {
  "/": "Home",
  "/food": "Foods",
  "/profile": "Profile",
} as any;

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const pathname = usePathname();

  const clearSlash = pathname?.split("/")[1];
  const path = clearSlash ? `/${clearSlash}` : "/";

  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  return (
    <header className="sm:items-start">
      <Container size="large" className="flex justify-between px-0 select-none xs:items-start sm:items-center">
        <Link href='/' className="font-bold drop-shadow-md">
          Flavor Fusionator
        </Link>
        <nav
          className={cx(
            isNavOpen ? "flex" : "hidden",
            "flex-col gap-3 sm:!flex sm:flex-row sm:items-start grow md:justify-center"
          )}
        >
          {Object.entries(MENU).map(([key, value]) => {
            const isActive = key === path;
            return (
              <span key={key}>
                <NextLink href={key} className={cx("drop-shadow-xl text-zinc-900 dark:text-zinc-50", isActive ? "font-bold" : "")}>
                  {value as string}
                </NextLink>
              </span>
            );
          })}
        </nav>
        {!isNavOpen && (
          <button
            type="button"
            className="flex select-none items-start sm:hidden"
            onClick={() => {
              setIsNavOpen(true);
            }}
          >
            <span>{MENU[path]}</span>
            &nbsp;↓
          </button>
        )}
        <ToggleTheme />
      </Container>
    </header>
  );
}