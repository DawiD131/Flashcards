import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 20%;
  padding: 6px;
  margin: 15px;
  background-color: #5c7699;
  box-shadow: 3px 3px 4px black;
  @media all and (max-width: 750px) {
    flex-basis: 60%;
  }
`;

export default StyledForm;
