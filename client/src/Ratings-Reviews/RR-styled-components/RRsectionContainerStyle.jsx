import styled from 'styled-components';

// Main view container
const RatingReviewContainer = styled.section`
display: flex;
flex-flow: row nowrap;
border-style: solid;
`;
// container for review list
const ReviewListContainer = styled.div`
display: flex;
width: 70%;
flex-flow: column wrap;
align-items: center;
`;
// used for add filter drop-down on review list
const Button = styled.div`
width: 50%;
flex-flow: row nowrap;
align-self: center;
`;
// main container for each review
const ReviewEntryStyle = styled.div`
width: 100%;
align-self: flex-start;
flex-flow: column wrap;
border-top: 2px solid;

`;
// main container for the ratings summary
const SummaryLeft = styled.div`
align-self: flex-start;
width: 28%;
flex-flow: column wrap;
`;
// container for star and characteristic breakdown
const RatingsBreakdown = styled.div`
display: flex;
align-self: flex-start;
flex-flow: row wrap;
`;

// Container for characteristic breakdown
const ProductBreakdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 20px;
`;

// Top portion of ratings and summary with the average rating
const RatingsSummaryTop = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: center;
font-size: 40px;
`;

// used for % of recommend and total reviews in ratings summary
const Recommend = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
`;

const BarChartStyle = styled.div`
align-self: center;
width:30%;
flex-flow: column wrap;
border-style: solid;
`;

const AverageRating = styled.canvas`
align-self: center;
flex-flow: column wrap;
border-style: solid;
`;

const BottomButtons = styled.div`
align-self: center;
justify-content: space-around;
`;

const FormContainer = styled.div`
width: 90%;
  margin: 10px auto;
  top: 10;
  left: 10;
`;

const FormStyle = styled.div`
  width: 90%;
  background: red;
  margin: 10px auto;
  top: 10;
  left: 10;
`;

const FormElement = styled.div`
width: 25%;
`;

const Header = styled.div`
width: 25%;
color: white;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${({ show }) => (show === 'true' ? 'block' : 'none')};
`;

const CloseButton = styled.div`
  top:3%;
  left:90%;
  position: absolute;
`;

const OuterBarGraph = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

const InnerBarGraph = styled.label`
margin: 5px;
&:hover {
  color: red;
}
`;

export {
  RatingReviewContainer, ReviewListContainer, ReviewEntryStyle,
  SummaryLeft, RatingsBreakdown, ProductBreakdownContainer,
  Recommend, BarChartStyle, AverageRating, BottomButtons, FormStyle,
  FormElement, Header, FormContainer, CloseButton, Modal, Button,
  OuterBarGraph, InnerBarGraph, RatingsSummaryTop,
};
