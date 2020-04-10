import styled, { css } from 'styled-components';

const Paragraph = styled.p`
    font-weight: ${({ theme, bold }) => (bold ? theme.bold : theme.regular)};

  ${({ start }) =>
    start &&
    css`
      padding-left: 25px;
      justify-self: start;
    `}

    ${({ transparent }) =>
      transparent &&
      css`
        color: ${(props) => props.theme.gray};
      `}

    color: ${(props) => props.theme[props.color]}
`;

export default Paragraph;
