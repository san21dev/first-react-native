import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Link } from 'expo-router'
const subscriptionDetail = () => {
    const {id} = useLocalSearchParams<{id:string}>();
  return (
    <View>
      <Text>subscriptionDetail</Text>
      <Link href="/"> Go back </Link>
    </View>
  )
}

export default subscriptionDetail