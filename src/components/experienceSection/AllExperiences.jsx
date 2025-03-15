import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Software Developer",
    company: "Tripalive.me Techonology Pvt Ltd., Bangalore",
    date: "Jan, 2024 - July, 2024",
    responsibilities: [
      "Developing User Interfaces",
      "Ensuring Cross-Browser Compatibility",
      "REST API Integration",
      "State Management"
    ],
  },
  {
    job: "Software Developer",
    company: "Pixalive Techonology Services Pvt Ltd., Bangalore",
    date: "Aug, 2024 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  
  // {
  //   job: "Course Instructor",
  //   company: "Sprints",
  //   date: "2024 - Present",
  //   responsibilities: [
  //     "Teaching JavaScript, React and TailwindCSS.",
  //     "Participating in preparing course materials.",
  //     "Helping students through their way in learning web development technologies.",
  //   ],
  // },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
