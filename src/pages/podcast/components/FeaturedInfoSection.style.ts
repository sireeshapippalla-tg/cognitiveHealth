import { styled } from "@mui/system";
import { Box, Typography, Chip, Avatar, IconButton } from "@mui/material";

export const InfoWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
  },
}));

export const InfoHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  marginBottom: '24px',
});

export const ChipContainer = styled(Box)({
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap',
});

export const InfoTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  marginBottom: theme.spacing(3),
  color: '#0f172a',
  lineHeight: 1.2,
  fontSize: '2rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
}));

export const InfoSectionHeading = styled(Typography)({
  fontWeight: 700,
  marginBottom: '8px',
  color: '#0f172a',
});

export const InfoParagraph = styled(Typography)({
  color: '#475569',
  marginBottom: '24px',
  fontSize: '1.05rem',
  lineHeight: 1.8,
});

export const TakeawaysList = styled("ul")({
  color: '#475569',
  paddingLeft: '16px',
  marginBottom: '32px',
  '& li': {
    marginBottom: '8px',
    lineHeight: 1.7,
    fontSize: '1.05rem',
    '&::marker': {
      color: '#15803d',
    },
  },
});

export const CategoryRow = styled(Box)({
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
  marginBottom: '32px',
  flexWrap: 'wrap',
});

export const CategoryHeading = styled(Typography)({
  fontWeight: 700,
  color: '#94a3b8',
  textTransform: 'uppercase',
  letterSpacing: '1px',
});

export const GridContainer = styled(Box)({
  marginBottom: '32px',
});

export const AuthorAvatar = styled(Avatar)({
  width: 48,
  height: 48,
  border: '2px solid #fff',
  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
});

export const LatestChip = styled(Chip)({
  backgroundColor: 'rgba(235, 123, 51, 0.1) !important',
  color: '#eb7b33 !important',
  fontWeight: 700,
});

export const InfoEpisodeChip = styled(Chip)({
  backgroundColor: '#f1f5f9 !important',
  color: '#475569 !important',
  fontWeight: 700,
});

export const DateChip = styled(Chip)({
  borderColor: '#e2e8f0 !important',
  color: '#64748b !important',
  fontWeight: 600,
});

export const CategoryChip = styled(Chip)({
  color: '#475569 !important',
  borderColor: '#cbd5e1 !important',
});

export const AuthorSection = styled(Box)({
  marginBottom: '24px',
});

export const AuthorSubSection = styled(Box)({
  marginBottom: '24px',
});

export const AuthorTitleText = styled(Typography)({
  fontWeight: 700,
  color: '#94a3b8',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  marginBottom: '16px',
});

export const AuthorWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

export const AuthorDetails = styled(Box)({});

export const AuthorName = styled(Typography)({
  fontWeight: 700,
  color: '#0f172a',
  lineHeight: 1,
});

export const AuthorTitle = styled(Typography)({
  color: '#64748b',
});

export const SubscribeButton = styled(IconButton)({
  backgroundColor: '#ff0000',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#cc0000',
  },
}) as typeof IconButton;
