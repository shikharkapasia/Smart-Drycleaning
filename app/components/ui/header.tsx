import React from "react";
import { Logo } from "./logo";
import { BsList } from "react-icons/bs";
import { useLocation } from "remix";

type headerPropType = {
  pathname: string
};

const Header: React.FC<headerPropType> = ({pathname}) => {

  const [open,setOpen] = React.useState(false);
  const [onTop,setOnTop] = React.useState(pathname === '/' ? true : false)
  const divRef = React.useRef<HTMLElement>(null);

  const handleOpen = () => {
    setOpen(prev => !prev)
  };

  const scroll = () => {
    if (divRef.current !== null) {
      const top = window.pageYOffset;
      if (top < window.innerHeight) {
        setOnTop(true)
      } else {
        setOnTop(false)
      }
    }
  };

  React.useEffect(() => {
      if (pathname === '/'){
        document.removeEventListener("scroll", scroll);
        document.addEventListener("scroll", scroll);
        return () => document.removeEventListener("scroll", scroll);
      }
  },[pathname]);

  React.useEffect(() => {
    if (pathname === '/'){
      scroll()
    }
  },[pathname])

  return (
    <header
      ref={divRef}
      className={`flex h-16 p-4 left-0 right-0 top-0 items-center fixed justify-between ${onTop ? 'bg-transparent' : 'bg-white'} w-screen box-border overflow-hidden z-50`}
    >
      <section className="min-w-[100px]">
        <Logo />
      </section>
      <section className="sm:hidden">
        <BsList onClick={handleOpen.bind(null)} className="h-7 w-7" />
      </section>
      <main
        className={`${open ? 'left-0': 'left-full'} absolute top-16 px-4 pb-4 w-full z-10 sm:ml-12  sm:static sm:flex sm:flex-row sm:justify-end sm:items-center sm:p-0  ${onTop ? 'text-white' : 'text-black'}`}
      >
        <section className="transition duration-200 flex flex-col sm:flex-row sm:gap-3 font-text font-normal">
          <a className="transition duration-200 hover:text-blue" href="/stores">Stores</a>
          <a className="transition duration-200 hover:text-blue" href="/pricing/dry-cleaning">Pricing</a>
          <a className="transition duration-200 hover:text-blue" href="/contact">Contact Us</a>
        </section>
        <section className="flex flex-col sm:flex-row sm:gap-4 sm:items-center">
          <div className="py-1 px-2 rounded-m font-text">
            <a className="transition duration-200 hover:text-blue">Login</a>
          </div>
          <div className="bg-blue py-2 px-3 rounded-md text-white font-text hover:bg-blue-100 ">
            <a>Book Now</a>
          </div>
        </section>
      </main>
    </header>
  );
};

export default Header;
