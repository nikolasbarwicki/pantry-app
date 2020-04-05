import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  background-color: #fff;
  display: block;
  width: 25px;
  height: 25px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }

  ${({ transparent }) =>
    transparent &&
    css`
      background-color: ${(props) => props.theme.paleblue};
    `}
`;

export default ButtonIcon;
