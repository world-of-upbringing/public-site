import type { NextPage } from "next";
import Logo from "./logo";
import Navbar from "./topNav";

const Header: NextPage = () => {
  return (
    <section id="navbar" className="flex-auto sticky top-0 z-50">
      <div className="flex">
        <div className="flex-auto"><Navbar/></div>
      </div>
    </section>
  );
}

export default Header