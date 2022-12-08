import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Outer = styled.div`
  margin: 16px;
`;

const Container = styled.div`
  perspective: 25px;
`;

const Card = styled.div`
  background-color: #ffffffb0;
  color: #101010;
  backdrop-filter: blur(8px);
  width: 240px;
  padding: 32px;
  border-radius: 24px;
  transition: transform 0.2s;
  overflow: hidden;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  &::after {
    content: '';
    position: absolute;
    bottom: calc(var(--y, 0) * 1px - 160px);
    right: calc(var(--x, 0) * 1px - 160px);
    width: 320px;
    height: 320px;
    background: radial-gradient(white, #00000000 80%);
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover::after {
    opacity: 0.4;
  }
`;

const Title = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: 500;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #909090;
  font-weight: 500;
`;

const Text = styled.p`
  text-align: center;
`;

export default function HeadingCard(props) {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  function transform(x, y, px, py) {
    const elCont = containerRef.current;
    const el = cardRef.current;
    const box = el.getBoundingClientRect();

    const mouseX =
      px - (elCont.offsetLeft + Math.floor(elCont.offsetWidth / 2));
    const mouseY =
      py - (elCont.offsetTop + Math.floor(elCont.offsetHeight / 2));
    const calcX = (-mouseY / el.offsetHeight / 2).toFixed(2);
    const calcY = (mouseX / el.offsetWidth / 2).toFixed(2);
    el.style.transform = `rotateX(${calcX}deg) rotateY(${calcY}deg)`;
    el.style.setProperty('--x', x - box.x);
    el.style.setProperty('--y', y - box.y);
  }

  function reset(el) {
    el.style = '';
  }

  return (
    <Outer>
      <Container
        ref={containerRef}
        onMouseMove={({ clientX, clientY, pageX, pageY }) => {
          transform(clientX, clientY, pageX, pageY);
        }}
        onMouseLeave={() => {
          reset(cardRef.current);
        }}
      >
        <Card ref={cardRef}>
          <props.icon
            style={{
              width: '32px',
              display: 'block',
              margin: '0 auto',
            }}
          />
          <Title>{props.title}</Title>
          <Subtitle>{props.subtitle}</Subtitle>
          <Text>{props.children}</Text>
        </Card>
      </Container>
    </Outer>
  );
}
