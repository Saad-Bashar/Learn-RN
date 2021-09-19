import React from "react";
import { TextInput, View } from "react-native";
import { FONTS, COLORS, SIZES } from "../constants";

const CustomTextInput = ({ title, type }) => {
  return (
    <View
      style={{
        marginTop: SIZES.font * 1.25,
        marginHorizontal: SIZES.base,
        height: 45,
      }}
    >
      <TextInput
        placeholder={title}
        autoCompleteType={type}
        keyboardType={type === "email" ? "email-address" : "default"}
        placeholderTextColor={COLORS.black}
        style={{
          width: "100%",
          height: "100%",
          paddingHorizontal: SIZES.font,
          fontFamily: "Roboto-Regular",
          borderRadius: 5,
          backgroundColor: COLORS.white,
          shadowColor: COLORS.white,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          elevation: 2,
          ...FONTS.body4,
        }}
      />
    </View>
  );
};

export default CustomTextInput;
