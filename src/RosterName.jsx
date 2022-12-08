import styled from 'styled-components';
import { StarIcon } from '@heroicons/react/24/solid';

const Container = styled.div`
  display: flex;
  margin: 8px 0;
  justify-content: center;
  gap: 4px;
  align-items: center;

  svg {
    width: 16px;
    height: 16px;
    color: #b6acd1;
  }
`;

const Number = styled.p`
  font-weight: bold;
  font-size: 14px;
`;

const Name = styled.p`
  font-size: 14px;
  white-space: nowrap;
`;

export default function RosterName({ children, captain, number }) {
  return (
    <Container>
      {number && <Number>{number}</Number>}
      <Name>{children}</Name>
      {captain && <StarIcon title="Captain" />}
    </Container>
  );
}
