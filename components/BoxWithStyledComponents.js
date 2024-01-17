import styled, { css } from "styled-components";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.$isBlack ? "black" : "green")};
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;

function BoxWithStyledComponents({ $isBlack }) {
  return (
    <div>
      <StyledBox $isBlack={$isBlack}></StyledBox>
    </div>
  );
}

export default BoxWithStyledComponents;
