import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Link from "next/link";

const ReadResumeButton = () => {
  return (
    <Link target="_blank" href={"/assets/pdf/Houssam_Habbat_Resume.pdf"}>
      <Button className="relative overflow-hidden bg-gradient-to-r from-secondary-foreground to-slate-300 text-black group">
        <span className="absolute inset-0 bg-gradient-to-r from-slate-300 to-secondary-foreground transition-transform transform translate-x-full group-hover:translate-x-0 ease-in-out duration-300"></span>
        <span className="relative flex items-center">
          <FileText className="mr-2 h-4 w-4" />
          Read Resume
        </span>
      </Button>
    </Link>
  );
};

export default ReadResumeButton;
