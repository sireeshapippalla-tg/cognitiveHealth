
import StatsSection from "../ui/stateSection/StatsSection";

const RealResult = () => {
    const realResultItems = [
        {
          value: "24 days",
          title: "Rapid Speed-to-Value",
          description: "Payback Time in ~24 Days",
        },
        {
          value: "32 hours/week",
          title: "Empowered Revenue Cycle Teams",
          description: "~32 Hours Per Week Redirected",
        },
        {
          value: "8–10%",
          title: "Dramatically Lower Cost-to-Collect",
          description: "8–10% Reduction",
        },
        {
          value: "41.6%",
          title: "Faster Cash Flow",
          description: "41.6% Earlier Revenue Recognition",
        },
      ]
  return (
    <StatsSection
      title="Real Results, Not Promises"
      subtitle="Measurable impact from day one"
      items={realResultItems}
    />
  );
};

export default RealResult;
