import React from 'react'
import Link from "next/link";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Typical from "react-typical";
import GithubIcon from "../components/icons/Github";
import LinkedinIcon from "../components/icons/Linkedin";
import TwitterIcon from "../components/icons/Twitter";
import { getAllProjects } from '../functions/getAllProjects';


const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        loop={5}
        wrapper="p"
        steps={[
          "React Developer",
          2000,
          "Front-End Developer",
          2000,
          "Computer Engineer",
          2000,
        ]}
      />
    );
  },
  (props, prevProps) => true
);
 
export const getStaticProps = async () => {
  const projects = await getAllProjects();
  return {
    props: {
      projects,
    },
  };
}
 

export default function Home() {
  return (
    <Layout title={"Portfolio"} description={"My Portfolio"}>
      <motion.img
        src="/images/cube.svg"
        alt="dev"
        className="hidden md:block w-48 h-auto absolute top-48 right-10 z-[1]"
        whileHover={{ y: -10, rotate: 360, transition: { duration: 0.6 } }}
        drag
        dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
      />
      <motion.img
        src="/images/cube.svg"
        alt="dev"
        className="hidden md:block w-48 h-auto absolute bottom-10 left-10 z-[1]"
        whileHover={{ y: -10, rotate: 360, transition: { duration: 0.6 } }}
      />
      <main className="w-full h-full bg-transparent ">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span className="text-xl font-normal">Hello, I'm</span>
            </h4>
            <h1 className=" mt-5 text-gray-800 text-2xl font-extrabold tracking-normal  md:text-4xl md:mt-3 dark:text-white">
              Barış Can Çifçi
            </h1>
            <div className='mt-5 text-2xl font-normal tracking-normal text-gray-800 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text  dark:text-white md:text-4xl md:mt-3'>
            <TypingAnimation />
            </div>
            <div className="flex items-center mt-8 space-x-6 md:mt-4">
              <motion.a
                href="https://github.com/codingwithdidem"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <GithubIcon className={"w-8 h-8 fill-current"} />
              </motion.a>

              <motion.a
                href="https://twitter.com/DidemKkkaraasl1"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <TwitterIcon className={"w-8 h-8 fill-current"} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/didem-k%C3%BCc%C3%BCkkaraaslan-2a2a23140/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <LinkedinIcon className={"w-8 h-8 fill-current"} />
              </motion.a>
            </div>
          
          </div>
          <article className="mt-3 prose md:mt-4 md:prose-lg dark:prose-dark ">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span>// Portfolio.js </span>
                  </div>
                  <p>
                    <span className="text-gray-500">//</span>{" "}
                    <span className="text-purple-300">Todo:</span> You can drag
                    these cubes I'm really in love with them
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="">
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        techJs
                        <span className="font-bold text-gray-500">1</span> =
                        ["Reactjs", "Nextjs", "Graphql", "Nodejs"];{" "}
                      </p>
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        techCss
                        <span className="font-bold text-pink-300"></span> =
                        ["Tailwindcss", "Bootstrap", "SCSS/SASS"];{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <Link href="/projects">
                      <a className="transition duration-300">Projects</a>
                    </Link>

                    <a
                      href="https://www.youtube.com/channel/UCfGXEo2uCkVqcIqkIaFNGcA"
                      target={"_blank"}
                      rel="noopener noreferrer"
                      className="transition duration-300"
                    >
                      Github
                    </a>
                  </div>
                </code>
              </pre>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}
