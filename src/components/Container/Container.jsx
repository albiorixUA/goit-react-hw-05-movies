import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export default function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
