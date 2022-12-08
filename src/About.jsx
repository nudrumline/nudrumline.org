import styled from 'styled-components';
import InstagramEmbed from './InstagramEmbed';
import {
  ContentContainer,
  ContentText,
  ContentTitle,
  LargeColumn,
  SmallColumn,
} from './styling';

export default function About() {
  return (
    <ContentContainer id="about">
      <LargeColumn right>
        <ContentTitle>ABOUT US</ContentTitle>
        <ContentText>
          The Northwestern University Drumline is an organization affiliated
          with the Northwestern University Marching Band, now in our 105th
          (TODO: is this still correct lol when was this updated last???) year
          of performance.
        </ContentText>
        <ContentText>
          We are a close-knit group of performers brought together by our love
          of rhythm and marching percussion. Members come from a wide variety of
          backgrounds and experiences and learn a lot from each other as
          musicians and individuals. We pride ourselves on our dedication to the
          group and to one another, and we can all testify to the invaluable and
          rewarding experience that is being a part of the Northwestern
          Drumline.
        </ContentText>
      </LargeColumn>
      <SmallColumn>
        <InstagramEmbed />
      </SmallColumn>
    </ContentContainer>
  );
}
