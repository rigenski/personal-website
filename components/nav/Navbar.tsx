import Link from "next/link";
import { useEffect, useState } from "react";
import navlinksJSON from "../../data/navlinks.json";

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [screenWidht, setScreenWidht] = useState(0);
  const navlinks = navlinksJSON;

  const initDrawer = () => {
    const body = document.querySelector("body");

    if (drawer) {
      body?.classList.remove("overflow-hidden");
      setDrawer(false);
    } else {
      body?.classList.add("overflow-hidden");
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

    if (screenWidht > 768 && drawer) {
      initDrawer();
    }
  }, [screenWidht]);

  useEffect(() => {
    if (window.innerWidth) {
      setScreenWidht(window.innerWidth);
    }
  }, []);

  if (drawer) {
    return (
      <>
        <div
          id="bg__navbar"
          className="fixed h-screen w-full z-30 bg-black bg-opacity-50"
          onClick={() => onDrawerClick()}
        ></div>
        <header
          className={`fixed w-full z-40 bottom-0 top-auto md:bottom-auto md:top-0 ${
            screenWidht > 768 && scrollY > 10
              ? "bg-white shadow-md"
              : screenWidht > 768 && scrollY < 10
              ? ""
              : "bg-white shadow-md"
          }`}
        >
          <div className="container mx-auto px-4 py-4 max-w-screen-lg md:py-6">
            <div className="flex justify-between">
              <Link href="/">
                <a className="text-2xl font-bold leading-none">nexzy</a>
              </Link>
              <nav className="overflow-hidden block absolute w-full -ml-4 -mb-0.5 bottom-16 bg-white md:block">
                <ul className="flex flex-col w-full p-4 items-end">
                  {navlinks.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="w-full mt-3 border-2 border-gray-800 text-center"
                      >
                        <Link href={item.url}>
                          <a className="text-base font-bold block py-2 md:text-lg">
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
      </>
    );
  } else {
    return (
      <>
        <div
          id="bg__navbar"
          className="fixed h-screen w-full hidden z-30 bg-black bg-opacity-50"
          onClick={() => onDrawerClick()}
        ></div>
        <header
          className={`fixed w-full z-40 bottom-0 top-auto md:bottom-auto md:top-0 ${
            screenWidht > 768 && scrollY > 10
              ? "bg-white shadow-md"
              : screenWidht > 768 && scrollY < 10
              ? ""
              : "bg-white shadow-md"
          }`}
        >
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
      </>
    );
  }
};

export default Navbar;
