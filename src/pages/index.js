import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import MainComponent from "@/components/MainComponent";
export default function Home() {
  return (
    <motion.div>
      <Layout>
        <MainComponent />
      </Layout>
    </motion.div>
  );
}
