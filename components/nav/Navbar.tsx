import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import navlinksJSON from "../../data/navlinks.json";

library.add(faBars, faToggleOff, faToggleOn);

const Navbar = () => {
  const [width, setWidth] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [mobileScreen, setMobileScreen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true);
  const [drawer, setDrawer] = useState(false);
  const navlinks = navlinksJSON;

  const onDrawerClick = () => {
    const html = document.querySelector("html");

    if (drawer) {
      html?.classList.remove("overflow-hidden");
      setDrawer(false);
    } else {
      html?.classList.add("overflow-hidden");
      setDrawer(true);
    }
  };

  const initDarkTheme = () => {
    const html = document.querySelector("html");

    if (darkTheme) {
      html?.classList.remove("dark");
      setDarkTheme(false);
    } else {
      html?.classList.add("dark");
      setDarkTheme(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const { pageYOffset } = window;

      setScroll(pageYOffset);
    });
  }, [scroll]);

  useEffect(() => {
    if (mobileScreen && drawer) {
      onDrawerClick();
    }

    window.addEventListener("resize", () => {
      const { innerWidth } = window;

      setWidth(innerWidth);

      if (innerWidth < 768) {
        setMobileScreen(true);
      } else {
        setMobileScreen(false);
      }
    });
  }, [width]);

  useEffect(() => {
    const { innerWidth } = window;

    setWidth(innerWidth);

    if (innerWidth < 768) {
      setMobileScreen(true);
    } else {
      setMobileScreen(false);
    }
  }, []);

  return (
    <>
      {/* BACKGROUND NAVIGATION */}
      <div
        className={`fixed h-screen w-full z-30 bg-black ${
          drawer && mobileScreen ? "block bg-opacity-75" : "hidden bg-opacity-0"
        }`}
        onClick={() => onDrawerClick()}
      />
      {/* HEADER */}
      <header
        className={`fixed w-full z-50 dark:bg-black ${
          mobileScreen
            ? "top-auto bottom-0 bg-white shadow-md"
            : "top-0 bottom-auto"
        } ${scroll > 10 ? "bg-white shadow-md dark:bg-black" : null}`}
      >
        <div
          className={`container mx-auto max-w-screen-lg ${
            mobileScreen ? "md:py-6 px-0" : "py-4 px-4"
          }`}
        >
          <div className="flex justify-between bg-white dark:bg-black">
            {
              // BUTTON DARK THEME ON MOBILE SCREEN
              mobileScreen ? (
                <button
                  className={`absolute p-4 transform dark:text-white ${
                    drawer ? "translate-x-0" : "-translate-x-16"
                  }`}
                  onClick={() => initDarkTheme()}
                >
                  {
                    // ICON DARK THEME
                    darkTheme ? (
                      <FontAwesomeIcon
                        icon={["fas", "toggle-on"]}
                        className="h-6 text-2xl"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={["fas", "toggle-off"]}
                        className="h-6 text-2xl"
                      />
                    )
                  }
                </button>
              ) : null
            }
            {/* BRAND IMAGE */}
            <Link href="/">
              <a
                className={`font-bold leading-none transform dark:text-white ${
                  mobileScreen ? "text-2xl p-4" : "py-2 text-2xl"
                } ${drawer ? "translate-y-16" : "translate-y-0"} `}
              >
                rygenzx
              </a>
            </Link>
            {/* NAVIGATION */}
            <nav
              className={`${
                mobileScreen
                  ? `block absolute w-full -mb-2 bottom-16 bg-white transform ${
                      drawer ? "translate-y-0" : "translate-y-64"
                    } dark:bg-black`
                  : "flex items-center overflow-hidden"
              }`}
              style={mobileScreen ? { zIndex: -20 } : {}}
            >
              <ul
                className={`flex items-end ${
                  mobileScreen ? " flex-col w-full p-4 overflow-hidden" : null
                }`}
              >
                {navlinks.map((item, index) => (
                  <li
                    key={index}
                    className={`${
                      mobileScreen ? "w-full mt-3 text-center" : "ml-6"
                    }`}
                  >
                    <Link href={item.url}>
                      <a
                        className={`font-bold dark:text-white ${
                          mobileScreen
                            ? "text-base block py-2 border-2 border-black dark:border-white"
                            : "nav-link py-2 text-lg"
                        }`}
                        onClick={() => (mobileScreen ? onDrawerClick() : null)}
                      >
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
              {
                // BUTTON DARK THEME ON DEKSTOP SCREEN
                mobileScreen ? null : (
                  <button
                    className="ml-8 dark:text-white"
                    onClick={() => initDarkTheme()}
                  >
                    {
                      /**
                       * Icon DarkTheme
                       */
                      darkTheme ? (
                        <FontAwesomeIcon
                          icon={["fas", "toggle-on"]}
                          className="h-6 text-2xl"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={["fas", "toggle-off"]}
                          className="h-6 text-2xl"
                        />
                      )
                    }
                  </button>
                )
              }
            </nav>
            {
              /**
               * Drawer Navigation
               */
              mobileScreen ? (
                <button
                  className="p-4 dark:text-white"
                  onClick={() => onDrawerClick()}
                >
                  <FontAwesomeIcon
                    icon={["fas", "bars"]}
                    className="h-6 text-2xl"
                  />
                </button>
              ) : null
            }
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
