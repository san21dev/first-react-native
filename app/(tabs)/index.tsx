import "@/global.css"
import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router"; 

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>

      <Link href="/onboarding" asChild>
        <Pressable className="mt-4 bg-red-700 p-4 rounded">
          <Text className="text-white">Got to onboarding</Text>
        </Pressable>
      </Link>

      <Link href="/(auth)/sign-in" asChild>
        <Pressable className="mt-4 bg-green-500 p-4 rounded">
          <Text className="text-white">Go to Sign In</Text>
        </Pressable>
      </Link>

      <Link href="/(auth)/sign-up" asChild>
        <Pressable className="mt-4 bg-gray-500 p-4 rounded">
          <Text className="text-white">Go to Sign Up</Text>
        </Pressable>
      </Link>

      <Link href="/subscriptions/spotify">Spotify Subscription</Link>
      <Link
            href={{
                    pathname:"/subscriptions/[id]",
                    params:{id:"claude"}
            }}>
                    Claude max subscription
            </Link>
    </View>
  );
}