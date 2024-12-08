import { motion } from 'framer-motion';
import Logo from '../Logo/Logo';

export default function Hero() {
  return (
    <div className="bg-primary text-white min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Transform Your Brand With Creative Solutions
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            We craft compelling stories and innovative campaigns that connect brands with their audience.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}