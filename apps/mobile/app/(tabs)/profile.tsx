import { ScrollView } from "react-native-gesture-handler";
import ThemedLink from "@/components/ThemedLink";
import { ThemedView } from "@/components/ThemedView";

export default function Profile() {
  return (
    <ScrollView>
      <ThemedView>
        <ThemedLink href="../login">로그인</ThemedLink>
      </ThemedView>
    </ScrollView>
  );
}
