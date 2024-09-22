"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import React from "react";
import Logo from "./logo/Logo";

const MainNavbar = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="/wines">
            Mes vins
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            href="#"
            aria-current="page">
            Mes statistiques
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#">
            Mon profil
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default MainNavbar;
