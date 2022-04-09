import Navigation from '../Navigation';
import styled from 'styled-components';

const Heander = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
`;

export default function Appbar() {
  return (
    <Heander>
      <Navigation />
    </Heander>
  );
}
