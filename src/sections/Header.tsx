import MenuIcon from "@/assets/icon-menu.svg";
import LogoIcon from "@/assets/logo.svg";
import Button from "@/components/Button";
import Link from "next/link";
export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center border border-white/15 p-2.5 rounded-xl max-w-2xl mx-auto relative ">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="w-8 h-8" />
            </div>
          </div>
          <nav className="hidden md:block text-sm">
            <ul className="flex gap-8">
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-white transition"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-white transition"
                >
                  Developers
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-white transition"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-white transition"
                >
                  {" "}
                  Changelog
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex gap-4 items-center">
            <Button>Join waitlist</Button>
            <MenuIcon className="w-8 h-8 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
