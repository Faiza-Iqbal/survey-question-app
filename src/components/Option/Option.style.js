import styled from "styled-components";

export const OptionStyled = styled.div`
  background-color: #fff;
  margin-bottom: 10px;
  padding: 8px 28px;
  border-radius: 5px;
  font-size: 14px;
  border: ${(props) =>
    props.selected
      ? "2px solid cornflowerblue"
      : "1px solid rgba(160, 160, 160, 0.6)"};
  position: relative;
  min-height: 20px;
`;
