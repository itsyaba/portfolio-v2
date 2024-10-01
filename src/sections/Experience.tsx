import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { IconBrandJavascript } from "@tabler/icons-react";

export const Experience = () => {
  const experience = [{}];

  return (
    <div id="experience" className="grid grid-cols-4 bg-red-500 w-3/4 mx-auto">
      <div className="border border-white ">
        <EvervaultCard text="hover" icon={IconBrandJavascript} />
      </div>
      <div className="border border-white ">
        <EvervaultCard text="hover" />
      </div>
      <div className="border border-white ">
        <EvervaultCard text="hover" />
      </div>
      <div className="border border-white ">
        <EvervaultCard text="hover" />
      </div>
      <div className="border border-white ">
        <EvervaultCard text="hover" />
      </div>
      <div className="border border-white ">
        <EvervaultCard text="hover" />
      </div>
      <div className="border border-white ">
        <EvervaultCard text="hover" />
      </div>
      <div className="border border-white ">
        <EvervaultCard text="hover" />
      </div>
    </div>
  );
};
