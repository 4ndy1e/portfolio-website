import { Link } from "react-router-dom";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { BriefcaseBusinessIcon, UserIcon, WorkflowIcon } from "lucide-react";

export default function Nav() {
  return (
    <section className="fixed top-0 left-0 w-full h-[57px] px-6 py-3 border-b border-[#606060] justify-between items-center flex bg-black z-[10] max-sm:h-[45px]">
      <div className="text-white text-base font-normal font-['Inter'] leading-snug">
        <img src="4L.png" className="h-[50px] apsect-square max-sm:h-[35px]" />
      </div>
      <div className="h-[45px] justify-start items-center gap-16 flex max-sm:gap-8">
        <PageLink text="Experiences" to="/" />
        <PageLink text="About" to="/about" />
        <PageLink text="LinkedIn" to="https://www.linkedin.com/in/4ndyle/" />
        <div className="h-[45px] justify-start items-center gap-16 flex max-sm:gap-8 sm:hidden">
          <Link to="/">
            <BriefcaseBusinessIcon className="text-white" />
          </Link>
          <Link to="/about">
            <UserIcon className="text-white" />
          </Link>
          <Link to="https://www.linkedin.com/in/4ndyle/">
            <LinkedInLogoIcon className="text-white w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}

interface PageLinkProps {
  text: string;
  to: string;
}

function PageLink({ text, to }: PageLinkProps) {
  return (
    <div className="flex items-center gap-1 max-sm:hidden">
      <Link to={to}>
        <p className="text-white hover:underline"> {text} </p>
      </Link>
      <ArrowTopRightIcon className="text-white" />
    </div>
  );
}
