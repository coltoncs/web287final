import { Link } from "react-router-dom";
import { FiCornerRightDown } from "react-icons/fi";
import styled from 'styled-components';
import mrp from "../img/mrp.JPG";
import ureco from "../img/ureco.JPG";
import portfolio from "../img/portfolio.png";

const Gallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    flex-direction: column;
  }
`;
const Card = styled(Link)`
  max-width: 33%;
  height: 300px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffb638;
  padding: 15px;
  border-radius: 15px;
  transition: transform 0.8s ease-in-out;
  box-shadow: 5px 5px 0 #ff7b00;
  margin: 25px 0;

  &:hover {
    transform: scale(1.1);
  }

  &>img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  &>h2 {
    text-align: center;
    color: black;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    max-width: 75%
  }
`;

const Portfolio = ( images ) => {
  return (
    <main>
      <h1>Portfolio</h1>
      <p style={{ textAlign: "center" }}>
        Take a look through some of my recent web development related projects
        <FiCornerRightDown />
      </p>
      <Gallery>
        <Card to="personal">
          <img
            src={portfolio}
            alt="The landing page of my personal portfolio website"
          />
          <h2>Personal Website</h2>
        </Card>
        <Card to="ureco">
          <img
            src={ureco}
            alt="United Restaurant Equipment Company's financing page"
          />
          <h2>United Restaurant Equipment Company</h2>
        </Card>
        <Card to="mrp">
          <img src={mrp} alt="Market Ready Painting NC's landing page" />
          <h2>Market Ready Painting</h2>
        </Card>
      </Gallery>
    </main>
  );
};

export default Portfolio;
