import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme, big }) =>
    big ? theme.fontsize.xl : theme.fontsize.l};
  font-weight: ${({ theme }) => theme.bold};
  margin: ${({ margin }) => margin};
`;

export default Heading;
