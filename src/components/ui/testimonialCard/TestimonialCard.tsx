// import {
//   CardWrapper,
//   QuoteText,
//   AuthorName,
//   RoleText,
//   CompanyText,
// } from "./TestimonialCard.style";

// interface TestimonialCardProps {
//   quote: string;
//   author: string;
//   role: string;
//   company: string;
// }

// export const TestimonialCard = ({
//   quote,
//   author,
//   role,
//   company,
// }: TestimonialCardProps) => (
//   <CardWrapper>
//     <QuoteText variant="body1">"{quote}"</QuoteText>

//     <div>
//       <AuthorName>{author}</AuthorName>
//       <hr/>
//       <RoleText>{role}</RoleText>
//       <CompanyText>{company}</CompanyText>
//     </div>
//   </CardWrapper>
// );

import {
  CardWrapper,
  QuoteText,
  Footer,
  Divider,
  AuthorName,
  RoleText,
  CompanyText,
} from "./TestimonialCard.style";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const TestimonialCard = ({
  quote,
  author,
  role,
  company,
}: TestimonialCardProps) => (
  <CardWrapper>
    <QuoteText>
      “{quote}”
    </QuoteText>

    <Footer>
      <Divider />
      <AuthorName>{author}</AuthorName>
      {role && <RoleText>{role}</RoleText>}
      <CompanyText>{company}</CompanyText>
    </Footer>
  </CardWrapper>
);
