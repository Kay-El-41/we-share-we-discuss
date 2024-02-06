import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from "next/link";
import AuthContent from "./auth-content";
import SearchInput from "./search-input";

export default function Header() {
  return (
    <Navbar className="mb-6 shadow-md">
      <NavbarBrand className="font-bold">
        <Link href={"/"}>WeDiscuss</Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <SearchInput />
      </NavbarContent>
      <NavbarContent justify="end">
        <AuthContent />
      </NavbarContent>
    </Navbar>
  );
}
