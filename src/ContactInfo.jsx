import styled from 'styled-components';

const Container = styled.div`
  margin: 16px 0;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #c0c0c0;
`;

export default function ContactInfo({ info }) {
  return (
    <Container>
      <Title>{info.name}</Title>
      <Text>{info.title}</Text>
      <Text>{info.email}</Text>
    </Container>
  );
}
