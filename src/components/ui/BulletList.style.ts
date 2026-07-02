import { styled } from "@mui/material/styles";

export const StyledUl = styled("ul")(({ theme }) => ({
  margin: 0,
  paddingLeft: theme.spacing(3),
  listStyleType: "disc",
  color: theme.palette.text.secondary,
  fontSize: 16,
}));

export const StyledLi = styled("li")(({ theme }) => ({
  marginBottom: theme.spacing(1),
  lineHeight: 1.8,
}));
