import React, { useState } from "react";
import { Box, Collapse } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import {
  CardSubtitle,
  CardTitle,
  CardWrapper,
  CollapseContent,
  DescriptionText,
  ExpandBtn,
  Header,
  IconCircle,
  IconImage,
  RichContent,
} from "./expandableCard.style";
import { MotionContent } from "../SplitSection/SplitSection.styles";

export interface ExpandableItem {
  id: number;
  title: string;
  subtitle?: string;
  description?: React.ReactNode;
  image?: string;
  icon?: React.ReactNode;
  defaultOpen?: boolean;
}

interface Props {
  item: ExpandableItem;
  variant?: "team" | "capability";
}

const ExpandableCard: React.FC<Props> = ({ item, variant = "team" }) => {
  const [open, setOpen] = useState(item.defaultOpen || false);
  const isCapability = variant === "capability";

  return (
    <CardWrapper open={open}>
      <Header onClick={() => setOpen(!open)}>
        {/* ICON - ORGANIC CIRCLE */}

        <IconCircle open={open}>
          {isCapability ? item.icon : <IconImage src={item.image} />}
        </IconCircle>

        <Box sx={{ flex: 1 }}>
          <CardTitle open={open}>{item.title}</CardTitle>
          {item.subtitle && !isCapability && (
            <CardSubtitle>{item.subtitle}</CardSubtitle>
          )}
        </Box>

        <ExpandBtn open={open}>{open ? <RemoveIcon /> : <AddIcon />}</ExpandBtn>
      </Header>
      {/* </Box> */}

      <Collapse in={open}>
        <CollapseContent>
          <MotionContent
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {typeof item.description === "string" ? (
              <DescriptionText>{item.description}</DescriptionText>
            ) : (
              <RichContent>{item.description}</RichContent>
            )}
          </MotionContent>
        </CollapseContent>
      </Collapse>
    </CardWrapper>
    // </Box>
  );
};

export default ExpandableCard;
