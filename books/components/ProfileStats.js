import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const stats = [
  {
    title: "Books Read",
    value: "47",
    icon: icons.read,
  },
  {
    title: "Books Bought",
    value: "117",
    icon: icons.bookshelf,
  },
  {
    title: "Books Liked",
    value: "27",
    icon: icons.heart,
  },
];

const ProfileStatsItem = ({ item }) => {
  return (
    <View
      style={{
        flex: 1,
        maxWidth: "42%",
        backgroundColor: COLORS.gray,
        borderRadius: SIZES.radius,
        marginHorizontal: SIZES.font,
        marginVertical: SIZES.font + 10,
      }}
    >
      <View
        style={{
          position: "absolute",
          top: -20,
          left: -10,
          backgroundColor: COLORS.white,
          width: 40,
          height: 40,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={item.icon}
          style={{ width: "50%", height: "50%" }}
          resizeMode="cover"
        />
      </View>
      <View style={{ marginTop: SIZES.padding, padding: SIZES.font }}>
        <Text style={{ ...FONTS.h1, color: COLORS.white }}>{item.value}</Text>
        <Text style={{ ...FONTS.body4, color: COLORS.white }}>
          {item.title}
        </Text>
      </View>
    </View>
  );
};

const ProfileStats = () => {
  return (
    <View style={{ margin: SIZES.font }}>
      <View style={{ marginVertical: SIZES.font }}>
        <FlatList
          data={stats}
          numColumns={2}
          renderItem={({ item }) => <ProfileStatsItem item={item} />}
          keyExtractor={(item) => `${item.title}`}
        />
      </View>
    </View>
  );
};

export default ProfileStats;
