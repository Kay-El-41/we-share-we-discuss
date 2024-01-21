import { Input, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from "next/link";
import AuthContent from "./auth-content";

export default function Header() {
  return (
    <Navbar className="mb-6 shadow-md">
      <NavbarBrand className="font-bold">
        <Link href={"/"}>WeDiscuss</Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <Input />
      </NavbarContent>
      <NavbarContent justify="end">
        <AuthContent />
      </NavbarContent>
    </Navbar>
  );
}
