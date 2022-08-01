import styled from 'styled-components';
import carFrameImage from './car-frame.png';
import carWheelImage from './car-wheel.png';

export const CarFrame = styled.div`
  background: url(${carFrameImage.src}) no-repeat center;
  height: 84px;
  width: 292px;
  display: flex;
  justify-content: center;
`;

export const CarWheel = styled.div`
  background: url(${carWheelImage.src}) no-repeat center;
  width: 50px;
  height: 50px;
`;

export const CarWheelsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 85%;
  padding-top: 54px;
  margin-left: 6.8px;
`;

export const ParallaxContainer = styled.div`
display: flex;
background-color: white;
width: 100%;
`;
