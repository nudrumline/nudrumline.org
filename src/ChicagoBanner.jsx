import styled from 'styled-components';
import chicagoSkyline from './assets/chicago.png';
import { device } from './styling';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: 32px 0;
`;

const Image = styled.img`
  width: 100%;
  max-width: 320px;
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;

  @media ${device.desktop} {
    font-size: 32px;
  }
`;

export default function ChicagoBanner() {
  return (
    <Container>
      <Image src={chicagoSkyline} alt="Chicago Skyline" />
      <Text>CHICAGO'S BIG TEN DRUMLINE</Text>
    </Container>
  );
}
