"use client";

import Link, { LinkProps } from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type NavLinkProps = LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        {...props}
        className={cn(
          "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900",
          className
        )}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export default NavLink;
