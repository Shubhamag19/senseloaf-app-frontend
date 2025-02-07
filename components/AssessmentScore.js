import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";
import { HiDownload } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import SpiderChart from "./SpiderChart";

const AssessmentScore = () => {
  return (
    <div className="bg-white w-[70vw]">
      <div className="flex justify-between items-center mx-4 mt-4">
        <p className="font-medium text-app-header-blue">
          AI READINESS ASSESSMENT
        </p>
        <RxCrossCircled className="w-6 h-6 text-app-header-blue mr-28" />
      </div>
      <div className="mt-9 px-8 w-[100%]">
        <div className="flex items-center gap-4">
          <div>
            <Image src="/arrows.png" width={64} height={64} alt="arrows" />
          </div>
          <div className="bg-app-border rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] py-4 pl-3 pr-32 text-lg font-normal text-app-header-blue">
            Congratulations! Your AI Readiness Assessment is complete.
          </div>
        </div>
        <div className="mt-3 p-6">
          <div className="p-4 rounded-[20px] shadow-app-shadow bg-white">
            <div className="flex justify-between items-center border-b border-app-border pb-4">
              <p className="font-medium text-[20px] text-app-header-blue">
                AI Readiness Score Card
              </p>
              <button className="rounded-full py-1 px-6 border border-app-border flex items-center gap-1 text-app-header-blue">
                <HiDownload className="w-6 h-6" />
                Download
              </button>
            </div>
            <div className="mt-[18px] flex">
              <div className="w-full">
                <div className="flex gap-2 mb-3">
                  <div>
                    <Image
                      src="/building.png"
                      width={38}
                      height={38}
                      alt="building"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="text-2xl font-semibold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BE5] to-[#00E582]">
                          3.4/5
                        </span>
                      </div>
                      <div className="bg-app-amber-50 text-app-amber-600 rounded-full py-1 pl-2 pr-3 text-sm font-medium flex items-center gap-1">
                        <GoDotFill />
                        Developing Stage
                      </div>
                    </div>
                    <p className="text-xs font-normal text-app-info-gray mt-1">
                      AI READINESS SCORE
                    </p>
                  </div>
                </div>
                <div className="border-t-2 border-dotted border-app-border pt-3">
                  <p className="text-[15px] font-light text-app-header-blue">
                    Your organization seems in early phases of{" "}
                    <span className="font-semibold">AI adoption</span>
                  </p>
                </div>
                <div className="mt-3">
                  <div className="flex gap-3 justify-between">
                    <div className="w-full rounded-[10px] border border-app-border px-3 py-5 flex flex-col gap-1">
                      <p className="text-xs font-normal text-app-header-blue">
                        PROCESS AUTOMATION
                      </p>
                      <p className="text-[20px] font-normal text-app-header-blue">
                        10-30%
                      </p>
                      <p className="text-xs font-light text-app-light-gray">
                        Partially Optimized
                      </p>
                    </div>
                    <div className="w-full rounded-[10px] border border-app-border px-3 py-5 flex flex-col gap-1">
                      <p className="text-xs font-normal text-app-header-blue">
                        DATA READINESS
                      </p>
                      <p className="text-[20px] font-normal text-app-header-blue">
                        50-70%
                      </p>
                      <p className="text-xs font-light text-app-light-gray">
                        Data Maturity Growing
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-3 justify-between">
                    <div className="w-full rounded-[10px] border border-app-border px-3 py-5 flex flex-col gap-1">
                      <p className="text-xs font-normal text-app-header-blue">
                        TECH INTEGRATION
                      </p>
                      <p className="text-[20px] font-normal text-app-header-blue">
                        Basic
                      </p>
                      <p className="text-xs font-light text-app-light-gray">
                        Gaps Exist
                      </p>
                    </div>
                    <div className="w-full rounded-[10px] border border-app-border px-3 py-5 flex flex-col gap-1">
                      <p className="text-xs font-normal text-app-header-blue">
                        TALENT & CULTURE
                      </p>
                      <p className="text-[20px] font-normal text-app-header-blue">
                        10-40%
                      </p>
                      <p className="text-xs font-light text-app-light-gray">
                        Upskilling
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full ml-5 flex items-center">
                <SpiderChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentScore;
