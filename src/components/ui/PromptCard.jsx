import { motion } from "framer-motion";

const PromptCard = ({
  icon,
  title,
  description,
  onClick,
}) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
        y: -5,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={onClick}
      className="w-full rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-xl"
    >
      <div className="mb-4 text-4xl">
        {icon}
      </div>

      <h3 className="mb-2 text-xl font-semibold text-slate-800">
        {title}
      </h3>

      <p className="text-sm leading-6 text-slate-500">
        {description}
      </p>
    </motion.button>
  );
};

export default PromptCard;