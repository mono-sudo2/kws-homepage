"use client";

import { forwardRef, type ReactNode } from "react";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<LinkProps, "href"> {
  href: string;
  className?: string;
  activeClassName?: string;
  children: ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, href, ...props }, ref) => {
    const pathname = usePathname();
    const normalizedHref = href.endsWith("/") && href !== "/" ? href.slice(0, -1) : href;
    const normalizedPath = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, normalizedPath === normalizedHref && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
