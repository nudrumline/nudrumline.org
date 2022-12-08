import styled from 'styled-components';
import Files from './Files';
import ContactInfo from './ContactInfo';
import {
  ContentContainer,
  ContentText,
  ContentTitle,
  LargeColumn,
  Placeholder,
  SmallColumn,
} from './styling';
import Events from './Events';

const ContactInfoContainer = styled.div`
  padding: 32px 16px;
  border-radius: 16px;
  background-color: #242424;
  color: white;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export default function Contact({ info, join }) {
  return (
    <ContentContainer id="contact">
      <SmallColumn>
        <ContactInfoContainer>
          <Title>CONTACT INFORMATION</Title>
          {info ? (
            info.map((personInfo, i) => (
              <ContactInfo info={personInfo} key={`contact-${i}`} />
            ))
          ) : (
            <Placeholder>NO INFORMATION AVAILABLE</Placeholder>
          )}
        </ContactInfoContainer>
      </SmallColumn>
      <LargeColumn left>
        <ContentTitle>JOIN US</ContentTitle>
        <ContentText>
          Interested in joining the line? Check out the resources below for
          audition material and events. Also, check out the{' '}
          <a
            href="https://northwesternbands.org/numb"
            target="_blank"
            rel="noreferrer"
          >
            Northwestern University Wildcat Marching Band
          </a>{' '}
          website to request information about the band.
        </ContentText>
        {join ? (
          <>
            {join.files && <Files files={join.files} />}
            {join.events && <Events events={join.events} />}
          </>
        ) : (
          <Placeholder>NO INFORMATION AVAILABLE</Placeholder>
        )}
      </LargeColumn>
    </ContentContainer>
  );
}
