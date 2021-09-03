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
            <h1 className="text-2xl font-bold sm:text-4xl">
              Hello, I&apos;m nexzy.
            </h1>
            <h1 className="text-3xl font-bold sm:text-5xl">
              Software Developer
            </h1>
            <p className="text-base font-base mt-8 sm:text-lg">
              Curabitur non nulla sit amet nisl tempus. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae
              Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
              amet ligula
            </p>
            <button className="text-base font-bold bg-white border-4 border-rainbow px-8 py-3 mt-8 sm:text-lg">
              Experience
            </button>
            <div className="flex">
              <div className="w-1/12 my-auto pr-4 md:hidden">
                <div className="border-4 border-black -ml-4"></div>
              </div>
              <ul className="flex justify-center my-12 w-10/12 md:justify-start md:my-0 md:mt-12">
                <li className="mx-auto md:mx-0 md:mr-6">
                  <Link href="#">
                    <a>
                      <FaGithub size={48} />
                    </a>
                  </Link>
                </li>
                <li className="mx-auto md:mx-0 md:mr-6">
                  <Link href="#">
                    <a>
                      <FaFacebook size={48} />
                    </a>
                  </Link>
                </li>
                <li className="mx-auto md:mx-0 md:mr-6">
                  <Link href="#">
                    <a>
                      <FaInstagram size={48} />
                    </a>
                  </Link>
                </li>
                <li className="mx-auto md:mx-0 md:mr-6">
                  <Link href="#">
                    <a>
                      <FaLinkedin size={48} />
                    </a>
                  </Link>
                </li>
                <li className="mx-auto md:mx-0 md:mr-6">
                  <Link href="#">
                    <a>
                      <FaTelegram size={48} />
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="w-1/12 my-auto pl-4 md:hidden">
                <div className="border-4 border-black -mr-4"></div>
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
            <h4 className="text-lg font-bold mt-8 sm:text-xl">
              Any Question or Hiring ?
            </h4>
            <button className="text-base font-bold text-white bg-gray-900 px-8 py-3 mt-4 sm:text-lg">
              Contact Me .
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
