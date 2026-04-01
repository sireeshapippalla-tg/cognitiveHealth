
import StatsSection from "../../ui/stateSection/StatsSection";

const RealResult = () => {
    const realResultItems = [
        {
          value: "24 days",
          title: "Rapid Speed-to-Value",
          description: "Payback time in ~24 days. Deploy automation in weeks not months",
        },
        {
          value: "32 hours/week",
          title: "Empowered Revenue Cycle Teams",
          description: "~ 32 hours per week redirected per staff from repetitive tasks to strategic, high-value work.",
        },
        {
          value: "8–10%",
          title: "Dramatically Lower Cost-to-Collect",
          description: "8-10% reduction in cost to collect with deploying just ONE use case.",
        },
        {
          value: "41.6%",
          title: "Faster Cash Flow",
          description: "41.6% earlier revenue recognition and lower A/R days",
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
