import { motion, AnimatePresence } from "framer-motion";

// Types
import { CheckBoxProps } from "../../types/CheckBoxTypes";

const Checkbox = ({ checked, onChange }: CheckBoxProps) => {
  return (
    <div
      className={`group relative w-6 h-6 rounded-md border border-lightGray cursor-pointer transition-colors duration-200 ${
        checked ? "bg-secondary border-secondary" : "bg-white"
      }`}
      onClick={onChange}
    >
      <AnimatePresence>
        {/* Hover state checkmark */}
        {!checked && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8L6.5 11.5L13 5"
                stroke="#D1D5DB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}

        {/* Checked state checkmark */}
        {checked && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 500 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              exit={{ pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.path
                d="M3 8L6.5 11.5L13 5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                exit={{ pathLength: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Checkbox;
