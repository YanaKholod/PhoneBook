import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #2e2d2dbc;
`;

export const Wrap = styled.div`
  margin-bottom: 60px;
  padding: 40px 0;
  display: flex;
  gap: 30px;
  justify-content: center;
`;

export const UnderTitle = styled.h2`
  color: #2e2d2dbc;
  text-align: center;
  font-size: 28px;
  height: 40px;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  margin: 0 6px;
  color: white;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: 1px solid #5b0d70;
  border-radius: 8px;
  box-shadow: 0 2px 0 rgb(5 145 255 / 10%);
  padding: 5px 8px;
  background-color: #5b0d70;
  font-weight: 400;
  font-size: 20px;
  :hover {
    opacity: 0.8;
  }
`;

export const Section = styled.section`
  padding-top: 40px;
  height: 40em;
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.96),
    rgba(255, 255, 255, 0.97)
  );
  border-radius: 1.1em;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
