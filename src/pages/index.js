import { motion } from "framer-motion";
import Layout from "@/components/common/Layout";
import MainComponent from "@/components/MainComponent";
import { useState } from "react";
export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <motion.div className={darkMode ? "dark" : ""}>
    
      <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
        <MainComponent darkMode={darkMode} setDarkMode={setDarkMode} />
      </Layout>
    </motion.div>
  );
}
