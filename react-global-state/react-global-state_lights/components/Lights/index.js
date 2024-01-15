import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ lights, isOn, handleToggle }) {
  console.log("Lights - the right one -:[0] ", lights[0]);
  console.log("Lights - isOn: ", isOn);

  return (
    <StyledLights>
      {lights.map((light) => (
        <li key={light.id}>
          <Light
            name={light.name}
            isOn={isOn}
            id={light.id}
            handleToggle={handleToggle}
          />
        </li>
      ))}
    </StyledLights>
  );
}
