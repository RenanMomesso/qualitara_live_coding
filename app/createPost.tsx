import CreatePostScreen from '@/src/features/create-post/create-post.screen'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const CreatePost = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CreatePostScreen />
    </SafeAreaView>
  )
}

export default CreatePost