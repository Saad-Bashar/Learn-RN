import React from "react";
import { View, SafeAreaView, ScrollView, Text, Image } from "react-native";
import BookInfoSection from "../components/BookInfoSection";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS, FONTS } from "../constants";
import BookDescription from "../components/BookDescription";
import BookBottomButton from "../components/BookBottomButton";
import { SharedElement } from "react-navigation-shared-element";

const BookDetail = ({ route, navigation }) => {
  const [book, setBook] = React.useState(null);
  const { id, item } = route.params;

  React.useEffect(() => {
    let { book } = route.params;
    setBook(book);
  }, [book]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        animated={true}
        translucent={true}
        backgroundColor="transparent"
      />
      <ScrollView>
        
        {book ? (
          <View style={{ flex: 1, backgroundColor: COLORS.black }}>
          <SharedElement id={`item.${item.id}.photo`}>
            <BookInfoSection book={book} navigation={navigation} id={id} />
          </SharedElement>
            
            
            <BookDescription description={book.description} />
            <BookBottomButton />
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.black,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>
              Oops, sorry!
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookDetail;
