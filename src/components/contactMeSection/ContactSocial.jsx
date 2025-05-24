import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/santoshkumarsahoo763/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/santosh763" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/ever_.guy_/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
