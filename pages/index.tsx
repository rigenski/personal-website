import Link from "next/link";
import { useState } from "react";
import SocialButton from "../components/home/SocialButton";
import socialsJSON from "../data/socials.json";

interface HomeProps {
  socials: Array<any>;
}

const Home = (props: HomeProps) => {
  const { socials } = props;

  return (
    <>
      <div className="h-full container mx-auto p-4 pt-16 pb-32 max-w-screen-lg flex items-center md:pt-32 md:pb-16 md:h-screen">
        <div className="flex flex-col text-center md:flex-row md:text-left">
          <div className="w-full pr-0 md:pr-16 md:w-3/4">
            <h1 className="text-2xl font-bold sm:text-4xl dark:text-white">
              Hello, I&apos;m rygenzx.
            </h1>
            <h1 className="text-3xl font-bold sm:text-5xl dark:text-white">
              Software Developer
            </h1>
            <p className="text-base font-base mt-8 sm:text-lg dark:text-white">
              My name is <b>Rigen Maulana</b>, you can call me <b>Rigen</b>. A
              Software Engineering Student at SMK Muhammadiyah 1 Sukoharjo. I
              love exploring new technologies and now have 1,5 years of
              experience in web development.
            </p>
            <Link href="/experience">
              <button className="text-base font-bold border-4 border-rainbow px-8 py-3 mt-8 transform hover:-translate-y-1 sm:text-lg dark:text-white">
                Experience
              </button>
            </Link>
            <div className="flex">
              <div className="w-1/12 my-auto pr-4 md:hidden">
                <div className="border-4 border-black -ml-4 dark:border-white"></div>
              </div>
              <ul className="flex justify-center my-12 w-10/12 md:justify-start md:my-0 md:mt-8">
                {socials.map((item, index) => {
                  return <SocialButton key={index} social={item} />;
                })}
              </ul>
              <div className="w-1/12 my-auto pl-4 md:hidden">
                <div className="border-4 border-black -mr-4 dark:border-white"></div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <img
              src="/img/profile.jpg"
              className="mx-auto w-60 h-60 object-cover md:w-full md:h-60"
              alt="Rigen Maulana Profile"
            />
            <h4 className="text-lg font-bold mt-12 sm:text-xl dark:text-white">
              Any Question or Hiring .. ?
            </h4>
            <Link href="/">
              <button className="text-base font-bold text-white bg-black px-8 py-3 mt-4 transform hover:-translate-y-1 sm:text-lg dark:bg-white dark:text-black">
                Contact Me .
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const socials = socialsJSON;

  return {
    props: {
      socials,
    },
  };
}

export default Home;
