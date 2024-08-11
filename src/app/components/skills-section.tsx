import { Card, CardContent } from "@/components/ui/card";
import { SKILL_LIST } from "@/lib/constant";
import Image from "next/image";
import SkillsChart from "./skills-chart";
const SkillsSection = () => {
  return (
    <div id="skills" className="flex flex-col mt-8 ">
      <h3 className="text-4xl font-bold mb-6 text-left capitalize bg-gradient-to-r from-primary to-slate-50 bg-clip-text text-transparent">
        skills
      </h3>
      <div className="flex lg:flex-row flex-wrap sm:flex-col">
        <div className="flex-1 ">
          <h6 className="text-2xl font-semibold mb-4">
            Technology I&apos;ve worked &amp; dabbled with:
          </h6>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 grid-flow-row lg:gap-4 sm:gap-1">
            {SKILL_LIST.map(({ image, level, name }) => (
              <Card
                className="hover:scale-105 transition-all duration-300 border-2 flex"
                key={name}
              >
                <CardContent className="flex flex-1 gap-1 items-center justify-between p-4 flex-wrap">
                  <p className="text-xl font-bold ">{name}</p>
                  <Image
                    src={image}
                    width={50}
                    height={50}
                    className="object-contain"
                    alt={name}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <h6 className="text-2xl font-semibold mb-4">Main skill set 🚀</h6>
          <div>
            <SkillsChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
