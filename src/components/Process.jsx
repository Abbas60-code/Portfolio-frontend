import React from 'react';

const Process = () => {
  const steps = [
    { num: "01", name: "Understand" },
    { num: "02", name: "Design" },
    { num: "03", name: "Build" },
    { num: "04", name: "Deploy" }
  ];

  return (
    <section className="py-24 border-t border-border/50">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center group">
            <span className="text-3xl font-light text-border mb-4 group-hover:text-accent transition-colors duration-300">
              {step.num}
            </span>
            <div className="w-12 h-[1px] bg-border mb-4 group-hover:bg-accent transition-colors duration-300"></div>
            <h4 className="text-lg font-medium text-secondaryText group-hover:text-primaryText transition-colors duration-300">
              {step.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
