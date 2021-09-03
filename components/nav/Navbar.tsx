import Link from "next/link";
import { useEffect, useState } from "react";
import navlinksJSON from "../../data/navlinks.json";

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [screenWidht, setScreenWidht] = useState(0);
  const navlinks = navlinksJSON;

  const initDrawer = () => {
    const nav = document.querySelector("nav");
    const navList = document.querySelector("nav ul");
    const navItem = document.querySelectorAll("nav ul li");

    if (drawer) {
      nav?.classList.remove("nav--show");
      nav?.classList.add("hidden");
      navList?.classList.add("flex-row", "items-end");
      navItem.forEach((item) => {
        item?.classList.add("ml-8");
      });
      setDrawer(false);
    } else {
      nav?.classList.add("nav--show");
      nav?.classList.remove("hidden");
      navList?.classList.remove("flex-row", "items-end");
      navItem.forEach((item) => {
        item?.classList.remove("ml-8");
      });
      setDrawer(true);
    }
  };

  const onDrawerClick = () => {
    initDrawer();
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.pageYOffset);
    });
  }, [scrollY]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidht(window.innerWidth);
    });
  }, [screenWidht]);

  useEffect(() => {
    const header = document.querySelector("header");

    if (screenWidht > 768 && drawer) {
      initDrawer();
    }

    if (screenWidht > 768 && scrollY > 10) {
      header?.classList.add("bg-white");
      header?.classList.add("shadow-md");
    } else if (screenWidht > 768 && scrollY < 10) {
      header?.classList.remove("bg-white");
      header?.classList.remove("shadow-md");
    } else {
      header?.classList.add("bg-white");
      header?.classList.add("shadow-md");
    }
  }, [scrollY, screenWidht]);

  useEffect(() => {
    if (window.innerWidth) {
      setScreenWidht(window.innerWidth);
    }
  }, []);

  return (
    <header className="fixed w-full z-40 bottom-0 top-auto md:bottom-auto md:top-0">
      <div className="container mx-auto px-4 py-4 max-w-screen-lg md:py-6">
        <div className="flex justify-between">
          <Link href="/">
            <a className="text-2xl font-bold leading-none">nexzy</a>
          </Link>
          <nav className="overflow-hidden hidden md:block">
            <ul className="flex items-end">
              {navlinks.map((item, index) => {
                return (
                  <li key={index} className="ml-8">
                    <Link href={item.url}>
                      <a className="text-base font-bold md:text-lg">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="block md:hidden">
            <button onClick={() => onDrawerClick()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
