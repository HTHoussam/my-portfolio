"use client";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDownCircleIcon } from "lucide-react";
import { useState } from "react";

const TechnologiesList = ({ technologies }: { technologies: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between ">
        <div className="flex flex-row gap-2 flex-wrap">
          {technologies.slice(0, 3).map((tech) => (
            <div
              key={tech}
              className="rounded-md border px-4 py-3 font-mono text-sm"
            >
              {tech}
            </div>
          ))}
        </div>
        {technologies.length > 3 && (
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronDownCircleIcon className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        )}
      </div>
      <CollapsibleContent className="flex flex-row flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <div
            key={tech}
            className="rounded-md border px-4 py-3 font-mono text-sm"
          >
            {tech}
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};
export default TechnologiesList;
