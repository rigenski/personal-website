import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <>
      <div className="h-full container mx-auto p-4 pt-16 pb-32 max-w-screen-lg flex items-center md:pt-32 md:pb-16 md:h-screen">
        <div className="flex flex-col text-center md:flex-row md:text-left">
          <div className="w-full pr-0 md:pr-16 md:w-3/4">
            <h1 className="text-2xl font-bold sm:text-4xl dark:text-white">
              Hello, I&apos;m nexzy.
            </h1>
            <h1 className="text-3xl font-bold sm:text-5xl dark:text-white">
              Software Developer
            </h1>
            <p className="text-base font-base mt-8 sm:text-lg dark:text-white">
              Curabitur non nulla sit amet nisl tempus. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae
              Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
              amet ligula
            </p>
            <Link href="/experience">
              <a>
                <button className="text-base font-bold border-4 border-rainbow px-8 py-3 mt-8 transform hover:-translate-y-2 sm:text-lg dark:text-white">
                  Experience
                </button>
              </a>
            </Link>
            <div className="flex">
              <div className="w-1/12 my-auto pr-4 md:hidden">
                <div className="border-4 border-black -ml-4 dark:border-white"></div>
              </div>
              <ul className="flex justify-center my-12 w-10/12 md:justify-start md:my-0 md:mt-12">
                <li className="mx-auto md:mx-0 md:mr-6">
                  <Link href="#github">
                    <a className="dark:text-white">
                      <FaGithub
                        size={48}
                        className="transform hover:scale-110"
                      />
                    </a>
                  </Link>
                </li>
                <li className="mx-auto md:mx-0 md:mr-6">
                  <Link href="#facebook">
                    <a className="dark:text-white">
                      <FaFacebook
                        size={48}
                        className="transform hover:scale-110"
                      />
                    </a>
                  </Link>
                </li>
                <li className="mx-auto md:mx-0 md:mr-6">
                  <Link href="#instagram">
                    <a className="dark:text-white">
                      <FaInstagram
                        size={48}
                        className="transform hover:scale-110"
                      />
                    </a>
                  </Link>
                </li>
                <li className="mx-auto md:mx-0 md:mr-6">
                  <Link href="#linkedin">
                    <a className="dark:text-white">
                      <FaLinkedin
                        size={48}
                        className="transform hover:scale-110"
                      />
                    </a>
                  </Link>
                </li>
                <li className="mx-auto md:mx-0 md:mr-6">
                  <Link href="#telegram">
                    <a className="dark:text-white">
                      <FaTelegram
                        size={48}
                        className="transform hover:scale-110"
                      />
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="w-1/12 my-auto pl-4 md:hidden">
                <div className="border-4 border-black -mr-4 dark:border-white"></div>
              </div>
            </div>
          </div>
          <div id="side" className="w-full md:w-1/4">
            <Image
              src="/img/profile.jpg"
              width="100%"
              height="240"
              alt="Rigen Maulana Profile Picture"
            ></Image>
            <h4 className="text-lg font-bold mt-8 sm:text-xl dark:text-white">
              Any Question or Hiring ?
            </h4>
            <Link href="/">
              <a>
                <button className="text-base font-bold text-white bg-black px-8 py-3 mt-4 transform hover:-translate-y-2 sm:text-lg dark:bg-white dark:text-black">
                  Contact Me .
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
