import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const projects = [
  {
    name: "Guide.care",
    desc: "Guide.care is a healthcare domain project that provides an end-to-end solution for patients from other countries to consult with doctors. The platform covers the entire process, including consultation, appointment booking, travel arrangements, hotel reservations, and returning home—all within a single site.",
    align: "left",
    image: "images/website-img-1.PNG",
    link: "https://charming-hummingbird-999f48.netlify.app/",
  },
  {
    name: "PixaliveRD",
    desc: "Research and Development (R&D) refers to the process of innovation, experimentation, and improvement of products, services, or systems. It plays a crucial role in advancing technology, improving efficiency, and solving complex problems.",
    align: "right",
    image: "images/website-img-2.PNG",
    link: "https://stately-unicorn-dee2eb.netlify.app/",
  },
  {
    name: "E-commerce",
    desc: "E-commerce (Electronic Commerce) refers to online platforms that enable buying and selling of goods or services. These platforms provide users with a seamless shopping experience, including product browsing, secure payments, order tracking, and customer support.",
    align: "left",
    image: "images/website-img-3.PNG",
    link: "https://meek-macaron-006481.netlify.app/",
  },
  {
    name: "Grow App",
    desc: "A Loyalty & Rewards Management System is designed to help businesses retain customers by offering reward points, discounts, and incentives for repeat purchases or engagement. These platforms encourage brand loyalty and improve customer retention through gamification, referral programs, and personalized rewards.",
    align: "right",
    image: "images/website-img-4.PNG",
    link: "https://chipper-gaufre-c86b85.netlify.app/",
  },
  {
    name: "Alfa Project",
    desc: "A Real Estate Management System is a digital platform designed to facilitate property listing, buying, selling, and renting processes. It provides users with tools to browse properties, schedule visits, compare prices, and connect with real estate agents. This system enhances the efficiency of property transactions by offering interactive listings, mortgage calculators, and legal documentation management.",
    align: "left",
    image: "images/website-img-5.PNG",
    link: "https://frolicking-meerkat-8c5f70.netlify.app/",
  },
  {
    name: "HRManagement",
    desc: "A Human Resource Management System (HRMS) is a digital platform designed to streamline HR processes such as employee records management, payroll processing, performance tracking, and attendance monitoring. This system helps organizations manage their workforce efficiently by automating key HR functions, improving communication, and ensuring compliance with labor laws.",
    align: "right",
    image: "images/website-img-6.PNG",
    link: "https://delicate-muffin-dac0c4.netlify.app/",
  },
  {
    name: "CivilERP",
    desc: "CivilERP is an enterprise resource planning (ERP) system designed for construction and civil engineering firms. It streamlines project management, resource allocation, budgeting, and progress tracking. The platform helps engineers and project managers handle multiple projects efficiently while ensuring cost control and timely execution.",
    align: "left",
    image: "images/website-img-7.PNG",
    link: "https://exquisite-crepe-539e83.netlify.app/",
  },
  {
    name: "Yarn-Portfolio",
    desc: "A personal portfolio website designed to showcase projects, skills, and professional experience. It serves as an online resume, allowing potential clients and employers to explore work samples, contact details, and career achievements in an interactive and visually appealing way.",
    align: "right",
    image: "images/website-img-8.PNG",
    link: "https://poetic-biscochitos-f01da9.netlify.app/",
  },
  {
    name: "RealEstate",
    desc: "A real estate platform designed to help buyers, sellers, and agents connect seamlessly. It provides property listings with detailed information, images, pricing, and contact options. Users can search, filter, and compare properties, making the home-buying and renting process more efficient.",
    align: "left",
    image: "images/website-img-9.PNG",
    link: "https://elegant-haupia-b1f30b.netlify.app/",
  },
  {
    name: "Restaurant",
    desc: "A restaurant website that allows customers to explore the menu, place online orders, and make table reservations. The platform provides a seamless experience for both customers and restaurant owners by streamlining order management, payments, and customer interactions.",
    align: "right",
    image: "images/website-img-10.PNG",
    link: "https://resilient-speculoos-60d143.netlify.app/",
  },
  
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12 text-center">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              desc={project.desc}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
