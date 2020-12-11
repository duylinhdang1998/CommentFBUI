import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageAutoSize from "../ImageSize/ImageSize";

function CommentItem({ content, user }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", flexWrap: "nowrap" }}>
        <View style={styles.avatar}>
          <ImageAutoSize
            uri="https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-avatar-de-thuong.jpg"
            width={50}
            height={50}
            borderRadius={100}
          />
        </View>
        <View style={{ flexWrap: "nowrap", flex: 1 }}>
          <View style={styles.content}>
            <View style={styles.descripWrapper}>
              <Text style={styles.name} numberOfLines={2}>
                Duy Linh
              </Text>
              <Text style={styles.descrip}>{content}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  avatar: {
    marginRight: 10,
  },
  content: {
    flex: 1,
    flexWrap: "wrap",
  },
  descripWrapper: {
    backgroundColor: "#f7f7f7",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 17,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 5,
  },
  descrip: {
    fontSize: 14,
    lineHeight: 24,
    color: "#444",
  },
});

export default memo(CommentItem);
