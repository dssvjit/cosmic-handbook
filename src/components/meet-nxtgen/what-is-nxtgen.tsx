import { FEATURE_LIST } from "@/lib/lists/feature.list";
import { FRAMEWORK_LIST } from "@/lib/lists/framework.list";

const WhatIsNxtgen = () => {
  return (
    <main className="w-full h-full flex flex-col justify-start items-center mt-[55px] overflow-auto p-10 space-y-12">
      <div className="flex flex-col justify-start items-start gap-8 md:w-11/12">
        <div className="w-full flex flex-col justify-start items-start gap-1">
          <h3 className="text-3xl font-semibold tracking-tight text-app-primary-dark">
            What is Nxtgen?
          </h3>
          <p className="text-md text-app-secondary-dark tracking-tight">
            Nxtgen is your go-to platform for mastering the latest in web
            development technologies. Whether you're a beginner or an
            experienced developer, you'll find everything you need to enhance
            your skills with comprehensive documentation, guides, and hands-on
            tutorials. Using Nxtgen, you can quickly grasp core concepts of
            modern tech stacks and frameworks, while gaining a strong foundation
            in development practices and architecture.
          </p>
        </div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
          {FEATURE_LIST.map((feature) => {
            const Icon = feature.icon;
            return (
              <li
                key={feature.id}
                className="relative flex flex-col justify-start items-start p-5 gap-2 bg-app-border-dark/40 border border-app-border-dark rounded-2xl transition-all"
              >
                <div className="absolute top-7 left-7 z-10 w-8 h-8 flex justify-center items-center rounded-full blur-3xl bg-white" />
                <div className="z-20 w-14 h-14 flex justify-center items-center rounded-full p-1 bg-midnight/60 border border-dashed border-app-secondary-light/60">
                  <Icon color="#3b82f6" className="w-12" />
                </div>
                <div className="flex flex-col flex-1 justify-center items-start gap-2 w-full">
                  <h2 className="z-20 text-lg font-semibold text-app-primary-dark">
                    {feature.title}
                  </h2>
                  <p className="text-sm text-app-secondary-dark w-full">
                    {feature.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col justify-start items-start gap-8 w-11/12">
        <div className="w-full flex flex-col justify-start items-start gap-1">
          <h3 className="text-2xl font-bold text-app-primary-dark">
            Explore by frameworks
          </h3>
          <p className="text-sm text-app-secondary-dark tracking-tight">
            Nxtgen provides a comprehensive overview of popular frameworks and
            libraries, including React, Next and more. Each framework section
            includes in-depth documentation, tutorials, and examples to help you
            get started quickly and effectively.
          </p>
        </div>
        <ul className="w-full grid grid-cols-2 md:grid-cols-3 gap-2">
          {FRAMEWORK_LIST.map((framework) => {
            const Icon = framework.icon;
            return (
              <li
                key={framework.id}
                className="relative flex flex-col justify-start items-start py-3 p-4 gap-2 bg-app-border-dark/40 border border-app-border-dark rounded-2xl transition-all"
              >
                <div className="absolute top-5 left-5 z-10 w-8 h-8 flex justify-center items-center rounded-full blur-lg bg-app-secondary-light/60" />
                <div className="w-full flex justify-start items-center gap-2">
                  <div className="z-20 w-8 h-8 flex justify-center items-center rounded-full bg-transparent">
                    <Icon color={framework.color} size={20} />
                  </div>
                  <h2 className="z-20 text-lg font-semibold text-app-primary-dark">
                    {framework.name}
                  </h2>
                </div>
                <p className="text-sm text-app-secondary-dark w-full px-1">
                  {framework.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default WhatIsNxtgen;
