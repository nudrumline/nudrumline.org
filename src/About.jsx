import styled from 'styled-components';
import InstagramEmbed from './InstagramEmbed';
import {
  ContentContainer,
  ContentText,
  ContentTitle,
  LargeColumn,
  SmallColumn,
} from './styling';

const startYear = 1911;
const monthShift = 5; // change on first of June

function getSeason() {
  const currentYear = new Date().getUTCFullYear();
  const currentMonth = new Date().getUTCMonth();

  let difference = currentYear - startYear;
  if (currentMonth < monthShift) {
    difference -= 1;
  }

  let suffix = 'th';

  if (difference % 10 === 1 && difference % 100 !== 11) {
    suffix = 'st';
  } else if (difference % 10 === 2 && difference % 100 !== 12) {
    suffix = 'nd';
  } else if (difference % 10 === 3 && difference % 100 !== 13) {
    suffix = 'rd';
  }

  return `${difference}${suffix}`;
}

export default function About() {
  return (
    <ContentContainer id="about">
      <LargeColumn right>
        <ContentTitle>ABOUT US</ContentTitle>
        <ContentText>
          The Northwestern University Drumline is an organization affiliated
          with the Northwestern University Marching Band, now in our{' '}
          {getSeason()} year of performance.
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
