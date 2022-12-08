import styled from 'styled-components';
import RosterName from './RosterName';
import { device } from './styling';

const Container = styled.div`
  background-color: white;
  padding: 32px 64px;
  border-radius: 16px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  text-align: center;
  margin: 0 32px;
  border: 2px solid
    ${(props) => (props.id === 'roster-0' ? '#4E2A84' : 'transparent')};

  @media ${device.desktop} {
    margin: 0 64px;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-weight: 600;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.desktop} {
    flex-direction: row;
    gap: 64px;
  }
`;

const Column = styled.div`
  flex: 1;
`;

const Section = styled.h3`
  font-weight: 600;
  font-size: 16px;
  margin: 32px 0 8px 0;
`;

export default function RosterCard({ id, roster }) {
  const getNames = (list, markNumbers) => {
    if (!list) return;

    if (!markNumbers) {
      list = list.sort((a, b) => {
        if (typeof a !== 'string') {
          a = a.name;
        }
        if (typeof b !== 'string') {
          b = b.name;
        }
        return a.split(' ').pop().localeCompare(b.split(' ').pop());
      });
    }

    return list.map((name, index) => {
      let n = name;
      let captain = false;
      if (typeof name !== 'string') {
        n = name.name;
        captain = name.captain;
      }
      return (
        <RosterName
          key={`${id}-${n}`}
          captain={captain}
          number={markNumbers ? index + 1 : undefined}
        >
          {n}
        </RosterName>
      );
    });
  };
  return (
    <Container id={`roster-${id}`}>
      <Title>{roster.year} ROSTER</Title>
      <Content>
        <Column>
          <Section>SNARES</Section>
          {getNames(roster.snares)}
          <Section>BASSES</Section>
          {getNames(roster.basses, true)}
        </Column>
        <Column>
          <Section>TENORS</Section>
          {getNames(roster.tenors)}
          <Section>CYMBALS</Section>
          {getNames(roster.cymbals)}
        </Column>
      </Content>
      <Section>INSTRUCTOR</Section>
      <RosterName>{roster.instructor}</RosterName>
    </Container>
  );
}
