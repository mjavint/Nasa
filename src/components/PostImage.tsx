import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import { PostImageNavigationProps, PostImageType } from '../types'

export default function PostImage({
  date,
  title,
  url,
  explanation,
}): FC<PostImageType> {
  const { navigate } = useNavigation<PostImageNavigationProps>()

  const handleViewPress = () => {
    navigate('Detail', { date, title, url, explanation })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title='View'
          onPress={handleViewPress}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(18,39,113,255)',
    borderRadius: 20,
    marginTop: 12,
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  date: {
    color: '#fff',
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
})
