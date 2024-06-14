import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      key={"loading"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className=""
    >
      <p className="p-4 text-white">Loading...</p>
    </motion.div>
  );
}
