"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const handleTakeAssessment = () => {
    router.push("/assessment");
  };

  return (
    <div className="h-[100vh] bg-gradient-to-b from-app-gradient-white to-white ">
      <p className="text-app-header-blue text-[30px] font-medium pl-8 py-3 bg-app-faded-white ">
        Provn.ai
      </p>
      <div className="mt-12">
        <div className="max-w-app-max-width mx-auto">
          <div className="">
            <div className="flex mt-3">
              <div>
                <Image src="/arrows.png" width={64} height={64} alt="arrows" />
              </div>
              <div className="flex flex-col justify-between ml-4">
                <p className="font-medium text-2xl text-app-header-blue">
                  Now Lets start with an assessment
                </p>
                <p className="text-app-text-secondary font-normal text-[18px] mt-4">
                  This assessment will evaluate your organization's AI readiness
                  across five critical dimensions
                </p>
              </div>
            </div>
            <div className="mt-9 bg-white rounded-[20px] px-4 shadow-app-shadow">
              <div className="flex justify-between border-b border-app-border py-4">
                <p className="text-app-header-blue text-[20px] font-medium">
                  AI READINESS ASSESSMENT
                </p>
                <Image
                  src="/expand-arrows.png"
                  width={32}
                  height={32}
                  alt="expand_icon"
                  className="cursor-pointer"
                />
              </div>
              <div className="flex gap-4">
                <div className="w-full">
                  <div className="mt-4 flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <Image
                        src="/flow.png"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <p className="text-base font-normal text-app-text-secondary">
                        PROCESS IDENTIFICATION
                      </p>
                    </div>
                    <p className="text-app-header-blue font-light">
                      How well-defined & automated are your processes?
                    </p>
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <Image
                        src="/time-setting.png"
                        className="w-5 h-5"
                        width={20}
                        height={20}
                      />
                      <p className="text-base font-normal text-app-text-secondary">
                        TECHNOLOGY READINESS
                      </p>
                    </div>
                    <p className="text-app-header-blue font-light">
                      How well-defined & automated are your processes?
                    </p>
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <Image src="/agreement.png" width={20} height={20} />
                      <p className="text-base font-normal text-app-text-secondary">
                        REGULATORY COMPLIANCE
                      </p>
                    </div>
                    <p className="text-app-header-blue font-light">
                      Are you adhering to necessary legal standards?
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-4 flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <Image src="/database.png" width={20} height={20} />
                      <p className="text-base font-normal text-app-text-secondary">
                        DATA AVAILABILITY
                      </p>
                    </div>
                    <p className="text-app-header-blue font-light">
                      Do you have structured, accessible data for AI?
                    </p>
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <Image src="/user-star.png" width={20} height={20} />
                      <p className="text-base font-normal text-app-text-secondary">
                        TALENT & CULTURE
                      </p>
                    </div>
                    <p className="text-app-header-blue font-light">
                      Do you have structured, accessible data for AI?
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-4 flex justify-end">
                <button
                  className="rounded-full bg-app-border py-4 px-6 text-app-header-blue font-medium"
                  onClick={handleTakeAssessment}
                >
                  Take Assessment
                </button>
              </div>
            </div>
          </div>
          <div className="fixed bottom-12 w-full max-w-app-max-width">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full rounded-full pl-4 py-4 border border-app-border placeholder:text-app-text-tertiary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
