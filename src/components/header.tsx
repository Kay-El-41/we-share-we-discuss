import Link from "next/link";
import { Suspense } from "react";
import SearchInput from "./search-input";
import AuthContent from "./auth-content";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";

export default function Header() {
  return (
    <Navbar className="mb-6 shadow-md">
      <NavbarBrand className="font-bold">
        <Link href={"/"}>WeDiscuss</Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <Suspense>
          <SearchInput />
        </Suspense>
      </NavbarContent>
      <NavbarContent justify="end">
        <AuthContent />
      </NavbarContent>
    </Navbar>
  );
}
