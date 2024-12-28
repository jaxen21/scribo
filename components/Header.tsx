import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="md:flex-1 flex items-center">
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={32}
          height={32}
          className="mr-2"
        />
        <p className="font-semibold leading-[24px] sm:pl-0 sm:text-xl hidden md:block">
          Scribo
        </p>
      </Link>
      {children}
    </div>
  );
};

export default Header;
