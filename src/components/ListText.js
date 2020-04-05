import styled, { css } from 'styled-components';

const ListText = styled.p`
  ${({ bold }) =>
    bold &&
    css`
      font-weight: ${(props) => props.theme.bold};
    `}

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

export default ListText;
