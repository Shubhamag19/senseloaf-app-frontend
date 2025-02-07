import { FaCheck } from "react-icons/fa6";

export default function VerticalProgress({
  assessmentTitles,
  currentStep = 1,
}) {
  const steps = assessmentTitles;

  return (
    <div className="flex flex-col relative ml-4">
      <div
        className="absolute left-3 top-3  w-0.5 bg-app-gray-outer transform translate-x-[-1px]"
        style={{ height: `${(steps.length - 1) * 48}px` }}
      >
        <div
          className="w-0.5 bg-app-header-blue absolute top-0 left-0 transition-all"
          style={{
            height: `${Math.min(
              (currentStep / (steps.length - 1)) * 100,
              100
            )}%`,
          }}
        />
      </div>

      {steps.map((step, index) => (
        <div key={index} className="flex items-center mb-6 relative">
          <div className="relative w-6 h-6 flex items-center justify-center">
            {currentStep > index + 1 ? (
              <div className="w-6 h-6 rounded-full bg-app-header-blue flex items-center justify-center text-white text-sm">
                <FaCheck className="text-white text-sm" />
              </div>
            ) : (
              <div
                className={`w-6 h-6 border-2 bg-white rounded-full flex items-center justify-center ${
                  currentStep === index + 1
                    ? "border-app-header-blue"
                    : "border-app-gray-outer"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    currentStep === index + 1
                      ? "bg-app-header-blue"
                      : "bg-app-gray-inner"
                  }`}
                ></div>
              </div>
            )}
          </div>

          <div
            className={`ml-2 font-normal ${
              currentStep >= index + 1
                ? "text-app-header-blue"
                : "text-app-gray-outer"
            }`}
          >
            {step.title}
          </div>
        </div>
      ))}
    </div>
  );
}
