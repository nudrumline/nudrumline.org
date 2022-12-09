import styled from 'styled-components';
import { content, device } from './styling';
import watermark from './assets/website-watermark.svg';

const Container = styled.div`
  background-color: #222222;
  color: white;
  padding: 32px;
`;

const Content = styled.div`
  max-width: ${content.width};
  margin: 16px auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media ${device.desktop} {
    flex-direction: row;
  }
`;

const Column = styled.div`
  flex: 1;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin: 8px 0;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Watermark = styled.div`
  display: flex;
  justify-content: center;

  a {
    opacity: 0.75;
    transition: opacity 150ms;

    &:hover {
      opacity: 1;
    }
  }

  img {
    width: 280px;

    @media ${device.desktop} {
      width: 320px;
    }
  }
`;

function Link({ to, newTab, children }) {
  return (
    <ListItem>
      <a
        href={to}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noreferrer' : undefined}
      >
        {children}
      </a>
    </ListItem>
  );
}

export default function Footer({ footer }) {
  return (
    <Container>
      <Content>
        {footer?.map(({ category, links }, i) => (
          <Column key={`footer-${i}`}>
            <Title>{category}</Title>
            <List>
              {links.map(({ name, url, sameTab }, j) => (
                <Link to={url} newTab={!sameTab} key={`footer-${i}-${j}`}>
                  {name}
                </Link>
              ))}
            </List>
          </Column>
        ))}
      </Content>
      <Watermark>
        <a href="https://www.dilanxd.com" target="_blank" rel="noreferrer">
          <img src={watermark} alt="website created by Dilan Nair" />
        </a>
      </Watermark>
    </Container>
  );
}
