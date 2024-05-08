import { usePledgeData } from "../contexts/PledgeDataContext";
import Section from "../layouts/Section";
import checkIcon from "../assets/images/icon-check.svg";

function Stat({ title, subTitle }: { title: string; subTitle: string }) {
  return (
    <h2 className="text-dark-gray">
      <span className="block text-4xl text-black font-bold mb-1">{title}</span>
      {subTitle}
    </h2>
  );
}

function StatDivider() {
  return (
    <div className="h-0.5 w-1/2 m-auto md-1:m-0 md-1:h-auto md-1:w-0.5 bg-slate-100"></div>
  );
}

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function StatsSection() {
  const { totalPledged, totalBackers, daysLeft } = usePledgeData();

  const goal = 100000;

  // calculate progress for css classes
  let cssWidthValue = "after:w-0";
  let goalReached = false;
  if (goal <= totalPledged) {
    cssWidthValue = "after:w-full"; // 100%
    goalReached = true;
  } else if (goal * (9 / 10) <= totalPledged) {
    cssWidthValue = "after:w-9/10"; // 90%
  } else if (goal * (4 / 5) <= totalPledged) {
    cssWidthValue = "after:w-4/5"; // 80%
  } else if (goal * (7 / 10) <= totalPledged) {
    cssWidthValue = "after:w-7/10"; // 70%
  } else if (goal * (3 / 5) <= totalPledged) {
    cssWidthValue = "after:w-3/5"; // 60%
  } else if (goal * (1 / 2) <= totalPledged) {
    cssWidthValue = "after:w-1/2"; // 50%
  } else if (goal * (2 / 5) <= totalPledged) {
    cssWidthValue = "after:w-2/5"; // 40%
  } else if (goal * (3 / 10) <= totalPledged) {
    cssWidthValue = "after:w-3/10"; // 30%
  } else if (goal * (1 / 5) <= totalPledged) {
    cssWidthValue = "after:w-1/5"; // 20%
  } else if (goal * (1 / 10) <= totalPledged) {
    cssWidthValue = "after:w-1/10"; // 10%
  }

  return (
    <Section>
      <div
        id="stats-section"
        className="flex flex-col md-1:flex-row items-center md-1:items-stretch gap-8 md-1:gap-12 mb-10 text-center md-1:text-left"
      >
        <Stat
          title={`$${numberWithCommas(totalPledged)}`}
          subTitle="of $100,000 backend"
        />
        <StatDivider />
        <Stat title={numberWithCommas(totalBackers)} subTitle="total backers" />
        <StatDivider />
        <Stat title={numberWithCommas(daysLeft)} subTitle="days left" />
      </div>
      <div
        className={`h-3 bg-slate-100 rounded-full after:content-[''] after:block ${cssWidthValue} after:h-full after:bg-moderate-cyan after:rounded-full relative`}
      >
        {goalReached && (
          <img
            src={checkIcon}
            alt=""
            className="h-10 w-10 absolute right-0 top-1/2 -translate-y-1/2"
          />
        )}
      </div>
    </Section>
  );
}

export default StatsSection;
