import styled from "./styled";

export const Shape = styled("div")`
  width: 200px;
  height: 200px;
  background: dodgerblue;
  border-radius: 12px;
  transition: all 1000ms ease;
  transform: translateY(0);
  will-change: opacity, transform;

  &.play {
    transform: translateY(50%);
  }
`;
