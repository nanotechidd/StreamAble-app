import { View, Text, ScrollView } from "react-native";
import React from "react";
import { MenuContainer, MenuWrapper } from "./PillMenu.styles";
import Pill from "../../Pill";

const PillMenu = ({ setCurrent, current }) => {
  const handlePress = (number) => {
    setCurrent(number);
  };
  return (
    <MenuContainer>
      <MenuWrapper>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
          <Pill
            title={`EPISODES`}
            index={0}
            onPress={() => handlePress(1)}
            active={current === 1}
          />
          <Pill
            title={`RELATIONS`}
            index={1}
            onPress={() => handlePress(3)}
            active={current === 3}
          />
          <Pill
            title={`CHARACTERS`}
            index={2}
            onPress={() => handlePress(2)}
            active={current === 2}
          />
        </ScrollView>
      </MenuWrapper>
    </MenuContainer>
  );
};

export default PillMenu;
