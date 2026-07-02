import { StyledUl, StyledLi } from "./BulletList.style";

interface BulletListProps {
  items: string[];
}

const BulletList: React.FC<BulletListProps> = ({ items }) => (
  <StyledUl>
    {items.map((text, index) => (
      <StyledLi key={index}>
        {text}
      </StyledLi>
    ))}
  </StyledUl>
);

export default BulletList;
