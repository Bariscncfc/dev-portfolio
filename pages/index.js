import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout title={"Portfolio"} description={"My Portfolio"}>
      <motion.img src="/images/laptop.svg" alt="laptop" className="hidden md:block w-48 h-auto absolute top-48 right-10 z-[1]" whileHover={{ y: -10, rotate:360, transition: {duration: 0.6}}} drag dragConstraints={{top:0, left:0, bottom:0, right:0}}/>
      <motion.img src="/images/laptop.svg" alt="laptop" className="hidden md:block w-48 h-auto absolute bottom-10 left-10 z-[1]" whileHover={{ y: -10, rotate:360, transition: {duration: 0.6}}}/>
      <main className="w-full h-full bg-black dark:bg-slate-600">
        <h1 className="text-green-500 dark:text-gray-800">hello</h1>
      </main>
    </Layout>
  );
}
