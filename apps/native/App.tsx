import { StyleSheet, Text, View } from "react-native";

import { Button } from "@repo/ui";
import { StatusBar } from "expo-status-bar";

export default function Native() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>LifePictures</Text>
      <Button
        onClick={() => {
          console.log("Pressed!");
          alert("Pressed!");
        }}
        text="Boop"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
});
