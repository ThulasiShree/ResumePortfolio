import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { AiOutlineSkype } from "react-icons/ai";



const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/thulasimani-ganesh-8471a1332/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/ThulasiShree" Icon={FiGithub} />
      <SingleContactSocial link="https://wa.me/6380821562" Icon={IoLogoWhatsapp} />
    </div>
  );
};

export default ContactSocial;
