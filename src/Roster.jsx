import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import styled from 'styled-components';
import RosterCard from './RosterCard';
import { Placeholder } from './styling';

const Container = styled.div`
  margin: 32px 0;
  background-color: #f8f8f8;
  padding: 32px 0;
`;

const RosterContainer = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  width: 100vw;
  padding: 32px 0;
`;

const NavigationBar = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  gap: 32px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: #e0e0e0;
  color: #111111;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 12px;
  cursor: pointer;

  &:not(.disabled) {
    &:hover {
      background-color: #d0d0d0;
    }
    &:active {
      background-color: #c0c0c0;
    }
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 20px;
    height: 20px;
  }
  p {
    margin: 0 8px;
  }
`;

const Subtext = styled.p`
  text-align: center;
  margin-top: 8px;
  color: #646464;
`;

export default function Roster({ rosters }) {
  const [current, setCurrent] = useState(0);

  const ROSTER_COUNT = rosters?.length || 0;

  const handleView = (increment) => {
    const next = current + increment;
    if (next < 0 || next >= ROSTER_COUNT) return;
    document.getElementById(`roster-${next}`).scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
    setCurrent(next);
  };

  return (
    <Container id="roster">
      {rosters && rosters.length > 0 ? (
        <>
          <RosterContainer className="no-scrollbar">
            {rosters.map((roster, index) => (
              <RosterCard key={index} id={index} roster={roster} />
            ))}
          </RosterContainer>
          <NavigationBar>
            <Button
              className={current <= 0 ? 'disabled' : undefined}
              onClick={() => handleView(-1)}
            >
              <ChevronLeftIcon />
              <p>Newer</p>
            </Button>
            <Button
              className={current >= ROSTER_COUNT - 1 ? 'disabled' : undefined}
              onClick={() => handleView(1)}
            >
              <p>Older</p>
              <ChevronRightIcon />
            </Button>
          </NavigationBar>
          <Subtext>
            Names are listed alphabetically. Stars denote drumline captains.
          </Subtext>
        </>
      ) : (
        <Placeholder>NO ROSTER AVAILABLE</Placeholder>
      )}
    </Container>
  );
}
