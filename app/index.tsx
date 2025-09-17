import PostScreen from "@/src/features/posts/posts.screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <PostScreen />
    </SafeAreaView>
  );
}
