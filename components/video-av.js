import { Video } from "expo-av";
import { useState, useRef } from "react";
import { Pressable } from "react-native";

export default function ({ uri, style, noPause }) {
  const video = useRef();
  const [isPlaying, setIsPlaying] = useState({});

  console.log("isPlaying = ", isPlaying, uri);

  return (
    <Pressable
      onPress={() => {
        if (noPause) return;
        isPlaying ? video.current.pauseAsync() : video.current.playAsync();
      }}
    >
      <Video
        ref={video}
        style={style}
        source={{ uri }}
        shouldPlay={true}
        isMuted={false}
        resizeMode="cover"
        onPlaybackStatusUpdate={(status) => {
          setIsPlaying(status?.isPlaying);
        }}
        onError={(e) => console.log(e)}
        isLooping
      />
    </Pressable>
  );
}
