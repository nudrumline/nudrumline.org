import styled from 'styled-components';
import { ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Container = styled.div`
  margin: 16px 0;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const EventContainer = styled.div`
  margin: 16px 0;
`;

const EventTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: left;
`;

const EventInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const EventInfoText = styled.p`
  text-align: left;
`;

export default function Events({ events }) {
  return (
    <Container>
      {events.map((event, i) => (
        <EventContainer key={`event-${i}`}>
          <EventTitle>{event.what}</EventTitle>
          <EventInfo>
            <ClockIcon />
            <EventInfoText>{event.when}</EventInfoText>
          </EventInfo>
          <EventInfo>
            <MapPinIcon />
            <EventInfoText>{event.where}</EventInfoText>
          </EventInfo>
        </EventContainer>
      ))}
    </Container>
  );
}
