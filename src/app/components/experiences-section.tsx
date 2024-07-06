import { Card, CardContent } from "@/components/ui/card";
import { EXPERIENCES_LIST } from "@/lib/constant";
import TechnologiesList from "./technologies-list";
const ExperiencesSection = () => {
  return (
    <div className="flex flex-col mt-8">
      <h3 className="text-4xl font-bold mb-6 text-left capitalize bg-gradient-to-r from-primary to-slate-50 bg-clip-text text-transparent">
        Experiences
      </h3>
      <div className="flex flex-col">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {EXPERIENCES_LIST.map(
            ({
              companyName,
              description,
              startDate,
              endDate,
              technologies,
            }) => (
              <Card
                className="hover:scale-105 transition-all duration-300 border-2 h-auto lg:min-h-96 flex"
                key={companyName}
              >
                <CardContent className="flex flex-1 flex-col gap-6 justify-start items-center p-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold capitalize">
                      {companyName}
                    </p>
                    <p className="italic text-xs text-muted-foreground">
                      {startDate} - {endDate}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-justify text-primary-foreground">
                    {description}
                  </p>
                  <div className="mt-auto flex flex-col gap-2">
                    <TechnologiesList technologies={technologies} />
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperiencesSection;
