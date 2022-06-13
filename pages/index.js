import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout title={"Portfolio"} description={"My Portfolio"}>
      <motion.img src="/images/laptop.svg" alt="laptop" className="hidden md:block w-48 h-auto absolute top-48 right-10 z-[1]" whileHover={{ y: -10, rotate:360, transition: {duration: 0.6}}} drag dragConstraints={{top:0, left:0, bottom:0, right:0}}/>
      <motion.img src="/images/laptop.svg" alt="laptop" className="hidden md:block w-48 h-auto absolute bottom-10 left-10 z-[1]" whileHover={{ y: -10, rotate:360, transition: {duration: 0.6}}}/>
      <main className="w-full h-full bg-transparent ">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span className="text-xl font-normal">Hello,  I'm</span>
            </h4>
            <h1 className=" mt-5 text-gray-800 text-2xl font-extrabold tracking-normal  md:text-4xl md:mt-3 dark:text-white">Barış Can Çifçi</h1>
          </div>
        </section>
      </main>
    </Layout>
  );
}
