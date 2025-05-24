import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="santoshsahoo763@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 8328839731" Image={FiPhone} />
      <SingleInfo text="Santosh, India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
