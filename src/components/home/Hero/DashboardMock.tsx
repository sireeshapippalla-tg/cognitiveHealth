import { Box, Stack, Typography } from "@mui/material";

import SpeedIcon from "@mui/icons-material/Speed";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CropFreeOutlinedIcon from "@mui/icons-material/CropFreeOutlined";

import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";

import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import { DashboardCard } from "../../ui/DashboardCard";
import { TrendIndicator } from "../../ui/trendIndicator/TrendIndicator";

import { ChartBar } from "../../ui/ChartBar";
import {
  DashboardContainer,
  DashboardGrid,
  CardHeader,
  CardTitle,
  IconWrapper,
  MetricValue,
  ChartContainer,
  YAxis,
  YAxisLabel,
  ChartArea,
  GridLine,
  BarsContainer,
  XAxis,
  XAxisLabel,
  PaybackHeader,
  AIButton,
  MetricWrapper,
  DashboardOuter,
} from "./DashboardMock.style";
import { ProgressBar } from "../../ui/progressBar/ProgressBar";

const DashboardMock = () => {
  return (
    <DashboardOuter>
      <DashboardContainer>
        <DashboardGrid>
          {/* LEFT COLUMN */}
          <Stack spacing={1}>
            {/* Net Collection Rate */}
            <DashboardCard>
              <CardHeader>
                <CardTitle>Net Collection Rate</CardTitle>
                <IconWrapper>
                  <CropFreeOutlinedIcon
                    sx={{ fontSize: 14, color: "#9ca3af" }}
                  />
                </IconWrapper>
              </CardHeader>
              <MetricValue>93.4%</MetricValue>
              {/* <Box mt={0.5}> */}
              <TrendIndicator
                value="0.2%"
                isPositive={true}
                label="vs last month"
              />
              {/* </Box> */}
            </DashboardCard>

            {/* ROI */}
            <DashboardCard>
              <CardHeader>
                <CardTitle>Return on Investment (ROI)</CardTitle>
                <IconWrapper>
                  <HelpOutlineOutlinedIcon
                    sx={{ fontSize: 14, color: "var(--color-text-blue)" }}
                  />
                </IconWrapper>
              </CardHeader>
              <MetricValue sx={{ color: "var(--color-green)" }}>
                <SpeedIcon sx={{ fontSize: 30, mr: 0.5, color: "var(--color-green)" }} />
                426.79x
              </MetricValue>
              <CardTitle
                sx={{ fontSize: "11px", fontWeight: 400, color: "var(--color-text-blue)" }}
              >
                return on investment
              </CardTitle>
            </DashboardCard>

            {/* Payback Period */}
            <DashboardCard>
              {/* Header */}
              <PaybackHeader>
                <CardTitle>Payback Period</CardTitle>

                <HelpOutlineOutlinedIcon
                  sx={{ fontSize: 13, color: "var(--color-text-blue)" }}
                />
              </PaybackHeader>

              <PaybackHeader>
                <RocketLaunchOutlinedIcon
                  sx={{ fontSize: 13, color: "var(--color-text-blue)" }}
                />

                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--color-gray-900)",
                  }}
                >
                  44%
                </Typography>
                <FlagOutlinedIcon sx={{ fontSize: 13, color: "var(--color-text-blue)" }} />
              </PaybackHeader>

              {/* Progress bar – aligned like reference */}

              <ProgressBar value={44} height={4} />

              {/* Footer */}
              <PaybackHeader>
                <Typography
                  sx={{
                    fontSize: "11px",
                    color: "var(--color-text-blue)",
                  }}
                >
                  $117,812.50 to recoup.
                </Typography>
              </PaybackHeader>
            </DashboardCard>
          </Stack>

          {/* RIGHT COLUMN: Insurance Verification */}
          <DashboardCard
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <CardTitle sx={{ fontSize: "16px" }}>
                  Insurance Verification Rate
                </CardTitle>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={0.5}
                  sx={{
                    bgcolor: "#dcfce7",
                    px: 1,
                    py: 0.5,
                    borderRadius: 8,
                  }}
                >
                  <EmojiEventsOutlinedIcon
                    sx={{ fontSize: 14, color: "var(--color-green)" }}
                  />
                  <CardTitle sx={{ color: "var(--color-green)", fontSize: "14px" }}>
                    Excellent
                  </CardTitle>
                </Stack>
              </Stack>

              <MetricValue sx={{ fontSize: "30px", mt: 2 }}>98.2%</MetricValue>

              <Stack direction="row" justifyContent="flex-end" mt={-2}>
                <TrendIndicator value="-2.2%" isPositive={false} />
              </Stack>

              {/* Sparkline simulation */}
              <Box height={40} mt={2} mb={2}>
                <svg
                  viewBox="0 0 100 20"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,10 L10,12 L20,8 L30,15 L40,10 L50,14 L60,5 L70,8 L80,4 L90,10 L100,2"
                    fill="none"
                    stroke="#9ca3af"
                    strokeWidth="2"
                  />
                </svg>
              </Box>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <CardTitle>Industry Rank</CardTitle>
                <CardTitle>85th %ile</CardTitle>
              </Stack>
              <Box mt={0.5}>
                <ProgressBar value={85} height={10} color="#f0fef7" />
              </Box>
            </Box>

            <AIButton
              variant="outlined"
              fullWidth
              startIcon={<AutoAwesomeOutlinedIcon />}
            >
              Get AI Advice
            </AIButton>
          </DashboardCard>
        </DashboardGrid>

        {/* BOTTOM CARD: Cash Flow */}
        <DashboardCard>
          <CardTitle sx={{ fontSize: "14px", color: "var(--color-gray-900)" }}>
            Cash Flow Analysis
          </CardTitle>
          <CardTitle sx={{ fontSize: "11px", fontWeight: 400, mb: 1 }}>
            A summary of cash inflows vs. outflows over the last 6 months.
          </CardTitle>

          <ChartContainer>
            {/* Y-Axis */}
            <YAxis>
              <YAxisLabel>$4.0M</YAxisLabel>
              <YAxisLabel>$3.0M</YAxisLabel>
              <YAxisLabel>$2.0M</YAxisLabel>
              <YAxisLabel>$1.0M</YAxisLabel>
              <YAxisLabel>$0.0M</YAxisLabel>
            </YAxis>

            {/* Chart Area */}
            <Box sx={{ width: "100%", overflow: "hidden" }}>
              <ChartArea sx={{ height: "100%" }}>
                {/* Grid Lines */}
                <GridLine sx={{ top: "0%" }} />
                <GridLine sx={{ top: "25%" }} />
                <GridLine sx={{ top: "50%" }} />
                <GridLine sx={{ top: "75%" }} />
                <GridLine sx={{ top: "100%" }} />

                {/* Bars */}
                <BarsContainer>
                  {/* Helper for bar groups */}
                  {[
                    [95, 70],
                    [75, 73],
                    [90, 70],
                    [95, 65],
                    [85, 75],
                    [83, 74],
                  ].map(([inflow, outflow], index) => (
                    <Box
                      key={index}
                      sx={{
                        height: "100%",
                        display: "flex",
                        gap: "4px",
                        alignItems: "flex-end",
                        justifyContent: "center",
                      }}
                    >
                      <ChartBar height={`${inflow}%`} color="var(--color-green)" />
                      <ChartBar height={`${outflow}%`} color="var(--color-text-red)" />
                    </Box>
                  ))}
                </BarsContainer>
              </ChartArea>
            </Box>
          </ChartContainer>

          {/* X-Axis */}
          <XAxis>
            <XAxisLabel>Aug 25</XAxisLabel>
            <XAxisLabel>Sep 25</XAxisLabel>
            <XAxisLabel>Oct 25</XAxisLabel>
            <XAxisLabel>Nov 25</XAxisLabel>
            <XAxisLabel>Dec 25</XAxisLabel>
            <XAxisLabel>Jan 26</XAxisLabel>
          </XAxis>

          {/* Legend */}
          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            // mt={3}
            // mb={3}
          >
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  bgcolor: "var(--color-green)",
                  borderRadius: "2px",
                }}
              />
              <CardTitle sx={{ fontSize: 10 }}>Cash Inflow</CardTitle>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  bgcolor: "var(--color-text-red)",
                  borderRadius: "2px",
                }}
              />
              <CardTitle sx={{ fontSize: 10 }}>Cash Outflow</CardTitle>
            </Stack>
          </Stack>

          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr"
            textAlign="center"
          >
            <MetricWrapper>
              <CardTitle>Total Inflow</CardTitle>
              <MetricValue sx={{ fontSize: "16px", color: "var(--color-green)" }}>
                $21.5M
              </MetricValue>
            </MetricWrapper>
            <MetricWrapper>
              <CardTitle>Total Outflow</CardTitle>
              <MetricValue sx={{ fontSize: "16px", color: "var(--color-text-red)" }}>
                $17.4M
              </MetricValue>
            </MetricWrapper>
            <MetricWrapper>
              <CardTitle>Net Cash Flow</CardTitle>
              <MetricValue sx={{ fontSize: "16px", color: "var(--color-green)" }}>
                +$4.1M
              </MetricValue>
            </MetricWrapper>
          </Box>
        </DashboardCard>
      </DashboardContainer>
    </DashboardOuter>
  );
};

export default DashboardMock;
