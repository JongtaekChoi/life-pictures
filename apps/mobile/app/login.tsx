import Animated, { FadeIn, SlideInDown } from "react-native-reanimated";
import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

import ThemedLink from "@/components/ThemedLink";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function Modal() {
  const backgroundColor = useThemeColor({}, "background");
  const canGoBack = router.canGoBack();

  return (
    <Animated.View
      entering={FadeIn}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000040",
      }}
    >
      {/* Dismiss modal when pressing outside */}
      <Link href={"/"} asChild>
        <Pressable style={StyleSheet.absoluteFill} />
      </Link>
      <Animated.View
        entering={SlideInDown}
        style={{
          width: "90%",
          height: "80%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor,
        }}
      >
        <ThemedText style={{ fontWeight: "bold", marginBottom: 10 }}>
          Modal Screen
        </ThemedText>
        {!canGoBack ? (
          <ThemedLink href="/">← Go back</ThemedLink>
        ) : (
          <ThemedText onPress={() => router.back()}>← Go back</ThemedText>
        )}
      </Animated.View>
    </Animated.View>
  );
}
