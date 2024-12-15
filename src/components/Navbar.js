import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = ["Home", "About", "Projects", "Blog", "Contact"];
  return (
    <nav className="fixed top-0 w-full backdrop-blur bg-black/60 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-6">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl font-bold tracking-wider"
        >
          KHAN
        </motion.div>
        <ul className="flex space-x-8 text-sm uppercase tracking-widest">
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              className="relative group cursor-pointer"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FFC8] group-hover:w-full transition-all duration-300"></span>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
