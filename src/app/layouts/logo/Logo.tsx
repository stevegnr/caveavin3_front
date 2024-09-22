import React from "react";
import logo from "@/assets/logo1.webp";
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      width={100}
      height={75}
      src={logo}
      alt="Logo de MaCaveAVin"
      style={{ borderRadius: "50%" }}
    />
  );
};

export default Logo;
