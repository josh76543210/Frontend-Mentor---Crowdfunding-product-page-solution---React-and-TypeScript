import Section from "../layouts/Section";

function StatsSection() {
  return (
    <Section>
      <div className="flex flex-col md-1:flex-row items-center md-1:items-stretch gap-8 md-1:gap-12 mb-10 text-center md-1:text-left">
        <h2 className="text-dark-gray">
          <span className="block text-4xl text-black font-bold mb-1">
            $89,914{" "}
          </span>
          of $100,000 backend
        </h2>
        <div className="h-0.5 w-1/2 m-auto md-1:m-0 md-1:h-auto md-1:w-0.5 bg-slate-100"></div>
        <h2 className="text-dark-gray">
          <span className="block text-4xl text-black font-bold mb-1">
            5,007{" "}
          </span>
          total backers
        </h2>
        <div className="h-0.5 w-1/2 m-auto md-1:m-0 md-1:h-auto md-1:w-0.5 bg-slate-100"></div>
        <h2 className="text-dark-gray">
          <span className="block text-4xl text-black font-bold mb-1">56 </span>
          days left
        </h2>
      </div>
      <div className="h-3 bg-slate-100 overflow-hidden rounded-full after:content-[''] after:block after:w-3/4 after:h-full after:bg-moderate-cyan after:rounded-full"></div>
    </Section>
  );
}

export default StatsSection;
