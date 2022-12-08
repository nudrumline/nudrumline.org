import styled from 'styled-components';
import preview from './assets/preview.jpg';
import HeadingCard from './HeadingCard';
import { device } from './styling';
import { HeartIcon, StarIcon, UserIcon } from '@heroicons/react/24/solid';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${preview}) no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 32px 0;
  box-sizing: border-box;
`;

const AboveTitle = styled.p`
  margin: 0;
  color: white;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 1px;

  @media ${device.desktop} {
    font-size: 40px;
    letter-spacing: 8px;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 64px;
  margin: 0;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 4px;
  -webkit-text-stroke-color: white;
  text-align: center;
  line-height: 1;
  font-weight: 900;

  @media ${device.desktop} {
    font-size: 144px;
    -webkit-text-stroke-width: 8px;
    letter-spacing: 8px;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  margin: 32px;
  flex-wrap: no-wrap;
  align-items: center;
  width: 100%;
  overflow-x: scroll;

  @media ${device.desktop} {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: 32px;
  color: white;
  background: none;
  border: none;
  padding: 20px;
  transition: transform 0.2s, opacity 0.2s;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    transform: translateY(12px);
    opacity: 1;
  }
  svg {
    width: 64px;
    height: 64px;
    stroke-width: 4px;
  }
`;

export default function Heading() {
  return (
    <Container>
      <AboveTitle>NORTHWESTERN UNIVERSITY</AboveTitle>
      <Title>DRUMLINE</Title>

      <BoxContainer className="no-scrollbar">
        <HeadingCard title="Pride" icon={HeartIcon} subtitle="noun">
          a consciousness of what befits oneself or one's position;
          self-respect; self-esteem
        </HeadingCard>
        <HeadingCard title="Victory" icon={StarIcon} subtitle="noun">
          triumph or ultimate success, in any form of contest, struggle, or
          enterprise
        </HeadingCard>
        <HeadingCard title="Honor" icon={UserIcon} subtitle="noun">
          great respect, esteem, or reverebnce received, gained, or given by a
          person or thing
        </HeadingCard>
      </BoxContainer>

      <Button
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          });
        }}
      >
        <ArrowDownIcon />
      </Button>
    </Container>
  );
}
