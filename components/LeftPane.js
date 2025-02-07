import { useEffect, useState } from "react";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";
import CircularProgress from "@mui/joy/CircularProgress";
import VerticalProgress from "@/components/VerticalProgress";

const LeftPane = ({ assessmentTitles, currentStep }) => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const val = ((currentStep - 1) / assessmentTitles.length) * 100;
    setProgressWidth(val);
  }, [currentStep]);

  return (
    <div className="h-[80vh] bg-app-bg-light-gray rounded-[20px] ml-6">
      <Image
        src="/menu-collapse.png"
        width={24}
        height={24}
        alt="expand_icon"
        className="cursor-pointer mt-6 ml-6"
      />
      <div className="bg-white rounded-[10px] mt-3 mx-6 p-5">
        <div className="flex items-center gap-4">
          <div className="mt-2">
            <CircularProgress
              determinate
              value={progressWidth}
              sx={{
                "--joy-palette-primary-solidBg": "#00E582",
                "--joy-palette-neutral-softBg": "#E9F0F6",
              }}
            />
          </div>
          <div className="flex items-center gap-1">
            <p className="text-lg text-app-header-blue font-normal">
              AI Operational Efficiency
            </p>
            <FaAngleDown className="text-base text-app-header-blue" />
          </div>
        </div>
        <div className="mt-4">
          <VerticalProgress
            assessmentTitles={assessmentTitles}
            currentStep={currentStep}
          />
        </div>
      </div>
    </div>
  );
};

export default LeftPane;
