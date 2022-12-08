import styled from 'styled-components';

export const device = {
  desktop: `(min-width: 768px)`,
};

export const content = {
  width: '960px',
};

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${content.width};
  padding: 96px 32px;
  gap: 32px;
  text-align: center;

  @media ${device.desktop} {
    flex-direction: row;
  }
`;

export const LargeColumn = styled.div`
  flex: 1;
  @media ${device.desktop} {
    text-align: ${(props) =>
      props.left ? 'left' : props.right ? 'right' : ''};
  }
`;

export const SmallColumn = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const ContentTitle = styled.h2`
  font-size: 32px;
  font-weight: normal;
  margin: 0;
`;

export const ContentText = styled.p`
  font-size: 18px;
  margin: 16px 0;
  a {
    color: #4e2a84;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Placeholder = styled.p`
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
  color: #646464;
`;
