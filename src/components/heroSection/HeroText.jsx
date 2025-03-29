import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { LuArrowDownRight } from "react-icons/lu";

const HeroText = () => {

  const handleDownload = () => {
    const resumeUrl = "pdf/THULASIMANI G.pdf"; 
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Thulasimani.pdf"); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        Software Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Thulasimani <br className="sm:hidden md:block" />
        Ganesh
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        A Passionate Software Developer <br /> with 3+ years of
        experience.
      </motion.p>
      <button onClick={handleDownload} className=" px-4 py-4 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
          Downloaded Resume
        <div className="sm:hidden md:block">
          <LuArrowDownRight />
        </div>
      </button>
    </div>
  );
};

export default HeroText;
