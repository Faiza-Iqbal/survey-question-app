import styled from "styled-components";

export const OptionLabel = styled.span`
  position: absolute;
  left: -15px;
  top: 5px;
  background-color: #e3e3e3;
  background-color: ${(props) =>
    props.selected ? "cornflowerblue" : "#e3e3e3"};
  width: 18px;
  height: 26px;
  border-radius: 5px;
  padding: 0px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: ${(props) => (props.selected ? "#fff" : "#333")};
`;
