import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const onboarding = () => {
  return (
    <View>
      <Text>onboarding</Text>
      <Link href="/(auth)/sign-in">Sign In</Link>
    </View>
  )
}

export default onboarding