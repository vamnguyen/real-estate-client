import { PiEnvelopeOpen, PiPhone } from "react-icons/pi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { usePathname } from "~/hooks/usePathname";
import { cn } from "~/lib/utils";

const Contact = () => {
  const { pathname } = usePathname();

  return (
    <div
      className={cn(
        "h-[85px] fixed w-full z-50 px-[6.25rem] py-[1.625rem] border-b border-b-[#DBDFEC] flex justify-between text-white",
        pathname === "/" ? "bg-transparent" : "bg-primary-700"
      )}
    >
      <div className="flex gap-3 items-center">
        <PiEnvelopeOpen size={28} />
        <a href="mailto:example@mail.com">
          <span className="font-bold">Email us at: </span>
          <span>example@mail.com</span>
        </a>
      </div>

      <div className="flex items-center gap-10">
        <div className="flex items-center gap-7 border-r-2 border-r-white pr-10">
          <FaFacebookF size={20} />
          <FaLinkedinIn size={20} />
          <FaInstagram size={20} />
          <FaYoutube size={20} />
        </div>
        <a href="tel:+123-4567 890" className="flex items-center gap-3">
          <PiPhone size={24} />
          <span>123-4567 890</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
