import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // import state
import Button from "../../components/button";

type CallbackFunction = (isOpen: boolean) => void;

function NavLink({
  to,
  children,
}: {
  to: string;
  children: string | JSX.Element;
}) {
  return (
    <Link href={to}>
      <a className="py-2 my-4 mx-4">{children}</a>
    </Link>
  );
}

function MobileNavLink({
  to,
  children,
  setOpen,
  open,
}: {
  to: string;
  children: string | JSX.Element;
  setOpen: CallbackFunction;
  open: boolean;
}) {
  return (
    <Link href={to}>
      <a
        className="text-xl font-medium my-4"
        onClick={() => onClick(setOpen, open)}
      >
        {children}
      </a>
    </Link>
  );
}

function Logo() {
  return (
    <div className="w-40 flex p-8 items-center text-primary">
      <Link href="/">
        <a>
          <Image src="/images/logo.png" alt="logo" width="60px" height="60px" />
        </a>
      </Link>
    </div>
  );
}

function onClick(setOpen: CallbackFunction, open: boolean) {
  setTimeout(() => {
    setOpen(!open);
  }, 100);
}

function MobileNav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: CallbackFunction;
}) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-background transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-background text-primary h-20">
        {" "}
        {/*logo container*/}
        <Link href="/">
          <a className="text-xl font-semibold">World of Upbringing</a>
        </Link>
      </div>
      <div className="flex flex-col ml-4 text-primary">
        <MobileNavLink to="/contact" setOpen={setOpen} open={open}>
          Contact
        </MobileNavLink>
        <MobileNavLink to="/about" setOpen={setOpen} open={open}>
          About
        </MobileNavLink>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter drop-shadow-md bg-background px-4 py-4 h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <Logo />
      <div className="w-full flex justify-end items-center text-primary">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-primary rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-primary rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-primary rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex place-items-center text-primary">
          <NavLink to="/contact">Blog</NavLink>
          <NavLink to="/about">Workshops</NavLink>
          <NavLink to="/about">One-on-One</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/about">
            <Button>Contact</Button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
