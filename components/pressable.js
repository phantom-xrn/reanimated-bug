import React from "react";
import { Pressable } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

const APressable = Animated.createAnimatedComponent(Pressable);

const animate = { scale: 0.96 };

export default function AnimatedPressable({ children, style, ...props }) {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));
  return (
    <APressable
      {...props}
      onPressIn={() => {
        scale.value = withSpring(animate.scale);
      }}
      onPressOut={() => {
        scale.value = withSpring(1.0);
      }}
      onPress={() => {
        alert("press");
      }}
      onLongPress={() => {
        alert("long press");
      }}
      hitSlop={10}
      style={[style, animatedStyle]}
    >
      {children}
    </APressable>
  );
}
