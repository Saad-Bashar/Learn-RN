import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import NewPlantItem from "../components/NewPlantItem";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import { plants, friends } from "../data/dummy";

const Home = ({ navigation }) => {
  const [newPlants, setNewPlants] = React.useState(plants);
  const [friendList, setFriendList] = React.useState(friendList);

  React.useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <View style={{ height: "35%", backgroundColor: COLORS.white }}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: COLORS.primary,
            paddingBottom: SIZES.base,
          }}
        >
          <View
            style={{
              marginTop: SIZES.padding,
              marginHorizontal: SIZES.padding,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
                New Plants
              </Text>
              <TouchableOpacity
                onPress={() => {
                  console.log("Focuse on pressed");
                }}
              >
                <Image
                  source={icons.focus}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: SIZES.base }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={newPlants}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                  <NewPlantItem item={item} index={index} />
                )}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
