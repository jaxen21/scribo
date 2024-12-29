import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <div className="md:flex-1">
        <Link href="/" className="flex items-center w-fit">
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
      </div>
      {children}
    </div>
  );
};

export default Header;
