import Link from "next/link";
import { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navlinksJSON from "../../data/navlinks.json";

library.add(faBars, faToggleOff, faToggleOn);

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [screenWidht, setScreenWidht] = useState(0);
  const navlinks = navlinksJSON;

  const onDrawerClick = () => {
    const body = document.querySelector("body");

    if (drawer) {
      body?.classList.remove("overflow-hidden");
      setDrawer(false);
    } else {
      body?.classList.add("overflow-hidden");
      setDrawer(true);
    }
  };

  const onToggleClick = () => {
    const body = document.querySelector("body");

    if (darkTheme) {
      body?.classList.remove("dark");
      setDarkTheme(false);
    } else {
      body?.classList.add("dark");
      setDarkTheme(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.pageYOffset);
    });
  }, [scrollY]);

  useEffect(() => {
    if (screenWidht > 768 && drawer) {
      onDrawerClick();
    }

    window.addEventListener("resize", () => {
      setScreenWidht(window.innerWidth);
    });
  }, [screenWidht]);

  useEffect(() => {
    if (window.innerWidth) {
      setScreenWidht(window.innerWidth);
    }
  }, []);

  if (screenWidht > 768) {
    return (
      <>
        <header
          className={`fixed w-full z-40 top-0 bottom-auto ${
            scrollY > 10 ? "bg-white shadow-md dark:bg-black" : ""
          }`}
        >
          <div className="container mx-auto px-4 py-6 max-w-screen-lg">
            <div className="flex justify-between">
              <Link href="/">
                <a className="text-2xl font-bold leading-none dark:text-white">
                  rygenzx
                </a>
              </Link>
              <nav className="flex items-center overflow-hidden">
                <ul className="flex items-end">
                  {navlinks.map((item, index) => {
                    return (
                      <li key={index} className="ml-6">
                        <Link href={item.url}>
                          <a className="text-lg font-bold dark:text-white">
                            {item.name}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <button
                  className="ml-8 dark:text-white"
                  onClick={() => onToggleClick()}
                >
                  {darkTheme ? (
                    <FontAwesomeIcon icon={["fas", "toggle-on"]} height="24" />
                  ) : (
                    <FontAwesomeIcon icon={["fas", "toggle-off"]} height="24" />
                  )}
                </button>
              </nav>
            </div>
          </div>
        </header>
      </>
    );
  } else {
    return (
      <>
        {drawer ? (
          <div
            id="bg__navbar"
            className="fixed h-screen w-full z-30 bg-black bg-opacity-75"
            onClick={() => onDrawerClick()}
          ></div>
        ) : (
          ""
        )}
        <header className="fixed w-full z-40 top-auto bottom-0 bg-white shadow-md dark:bg-black">
          <div className="container mx-auto px-4 max-w-screen-lg md:py-6">
            <div className="flex justify-between">
              {drawer ? (
                <button
                  className="pr-4 py-4 dark:text-white"
                  onClick={() => onToggleClick()}
                >
                  {darkTheme ? (
                    <FontAwesomeIcon icon={["fas", "toggle-on"]} height="24" />
                  ) : (
                    <FontAwesomeIcon icon={["fas", "toggle-off"]} height="24" />
                  )}
                </button>
              ) : (
                <Link href="/">
                  <a className="text-2xl pr-4 py-4 font-bold leading-none dark:text-white">
                    rygenzx
                  </a>
                </Link>
              )}
              {drawer ? (
                <nav className="block absolute w-full -ml-4 -mb-2 bottom-16 bg-white dark:bg-black">
                  <ul className="flex flex-col w-full p-4 items-end">
                    {navlinks.map((item, index) => {
                      return (
                        <li key={index} className="w-full mt-3 text-center">
                          <Link href={item.url}>
                            <a
                              className="text-base font-bold block py-2 border-2 border-black dark:text-white dark:border-white"
                              onClick={() => onDrawerClick()}
                            >
                              {item.name}
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              ) : (
                ""
              )}
              <button
                className="pl-4 py-4 dark:text-white"
                onClick={() => onDrawerClick()}
              >
                <FontAwesomeIcon icon={["fas", "bars"]} className="h-6" />
              </button>
            </div>
          </div>
        </header>
      </>
    );
  }
};

export default Navbar;
