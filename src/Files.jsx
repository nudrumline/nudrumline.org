import styled from 'styled-components';
import { DocumentIcon } from '@heroicons/react/24/solid';
import { device } from './styling';

const Container = styled.div`
  margin: 32px 0;
  svg {
    width: 32px;
    height: 32px;
  }
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #4e2a84;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media ${device.desktop} {
    justify-content: left;
  }
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export default function Files({ files }) {
  return (
    <Container>
      {files.map(({ name, file }, i) => (
        <Link href={file} target="_blank" rel="noreferrer" key={`file-${i}`}>
          <DocumentIcon />
          <Name>{name}</Name>
        </Link>
      ))}
    </Container>
  );
}
