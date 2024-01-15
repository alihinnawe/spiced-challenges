import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ id, name, ison, handleToggle }) {
  console.log("Light isOn: ", ison);
  return (
    <LightButton
      type="button"
      onClick={() => {
        console.log("ID of lights: ", id);
        handleToggle(id);
      }}
      isOn={ison}
    >
      <Icon isOn={ison}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{ison ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
