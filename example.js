import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View, Text, useWindowDimensions, ScrollView, Pressable } from "react-native";
import { Image } from "expo-image";
import Video from "./components/video";
import AnimatedPressable from "./components/pressable";

const posts = [
  {
    id: "1",
    media_type: "VIDEO",
    thumbnail_url: "https://cdn.shopify.com/s/files/1/2665/0346/files/2024-0725_CategoryImage_Uni-01-Shorts_Desktop.jpg",
    caption: "Come along for our LA takeover and summer Luxe DNA campaign shoot. Available NOW sitewide.",
  },
  {
    id: "2",
    media_type: "IMAGE",
    thumbnail_url: "https://cdn.shopify.com/s/files/1/2665/0346/files/2024-0725_CategoryImage_Uni-02-Shorts_Desktop.jpg",
    caption:
      "Introducing our revolutionary Tempo Front Clasp Sports Bra. This game-changing sports bra makes it easier than ever to pop off your top after a sweaty workout session with a front clip closure. No more post-workout struggles, just pure performance and effortless removal.",
  },
];

export default function Example() {
  const { width } = useWindowDimensions();
  const style = { width: width * 0.6, padding: 6 };

  return (
    <>
      <View>
        <View style={{ alignItems: "stretch", justifyContent: "flex-start" }}>
          <Video
            uri={"https://cdn.shopify.com/videos/c/o/v/ac4c89860a33411e8aed2399699b4dbd.mp4"}
            noPause={true}
            style={{ width: "100%", height: 500 }}
          />
        </View>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-start" }}
      >
        {posts.map((post) => (
          <AnimatedPressable key={post.id} onPress={() => { }} style={style}>
            <View
              style={[
                {
                  borderColor: "#e5e7eb",
                  borderWidth: 1,
                  borderRadius: 8,
                  overflow: "hidden",
                },
              ]}
            >
              <View>
                <Image
                  source={{ uri: post.thumbnail_url }}
                  style={{
                    width: "100%",
                    aspectRatio: 1,
                    resizeMode: "cover",
                  }}
                />
                {post.media_type == "VIDEO" ? (
                  <View
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesome5 name="play" size={40} color="white" />
                  </View>
                ) : null}
              </View>
              <Text numberOfLines={2} style={{ padding: 6 }}>
                {post.caption}
              </Text>
            </View>
          </AnimatedPressable>
        ))}
      </ScrollView>
    </>
  );
}
