import Video from "react-native-video";
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
        isPlaying ? video.current.pause() : video.current.resume();
      }}
    >
      <Video
        ref={video}
        style={style}
        source={{ uri }}
        muted={false}
        ignoreSilentSwitch="ignore"
        resizeMode={"cover"}
        onPlaybackStateChanged={(status) => {
          setIsPlaying(status?.isPlaying);
        }}
        onBuffer={(e) => console.log(e)}
        onError={(e) => console.log(e)}
        repeat={true}
      />
    </Pressable>
  );
}
