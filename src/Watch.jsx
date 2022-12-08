import { Fragment } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import {
  ContentContainer,
  ContentText,
  ContentTitle,
  device,
  LargeColumn,
  Placeholder,
  SmallColumn,
} from './styling';

const VideoListContainer = styled.div`
  padding: 32px 16px;
  border-radius: 16px;
  background-color: #f0f0f0;
  color: black;
`;

const Frame = styled.iframe`
  width: 320px;
  height: 180px;
  @media ${device.desktop} {
    width: 560px;
    height: 315px;
  }
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin: 16px 0;

  a {
    color: #4e2a84;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Item({ to, children }) {
  return (
    <ListItem>
      <a href={to} target="_blank" rel="noreferrer">
        {children}
      </a>
    </ListItem>
  );
}

export default function Watch({ videos }) {
  return (
    <ContentContainer id="videos">
      <LargeColumn right>
        <ContentTitle>WATCH US</ContentTitle>
        {videos ? (
          videos
            .filter(({ featured }) => featured)
            .map(({ name, youtube }) => (
              <Fragment key={`video-${youtube}-featured`}>
                <ContentText>{name}</ContentText>
                <Frame
                  src={`https://www.youtube.com/embed/${youtube}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></Frame>
              </Fragment>
            ))
        ) : (
          <ContentText>NO VIDEOS AVAILABLE</ContentText>
        )}
      </LargeColumn>
      <SmallColumn>
        <VideoListContainer>
          <Title>VIDEOS</Title>
          <List>
            {videos ? (
              videos.map(({ name, youtube }) => (
                <Item
                  to={`https://youtu.be/${youtube}`}
                  key={`video-${youtube}`}
                >
                  {name}
                </Item>
              ))
            ) : (
              <Placeholder>NO VIDEOS AVAILABLE</Placeholder>
            )}
          </List>
        </VideoListContainer>
      </SmallColumn>
    </ContentContainer>
  );
}
