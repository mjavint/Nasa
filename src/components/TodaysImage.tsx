import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

import { PostImageNavigationProps, PostImageType } from '../types'

export default function TodaysImage({
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
      <Image
        source={{ uri: url }}
        style={styles.image}
      />
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
    backgroundColor: '#2c449d',
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 190,
    borderRadius: 32,
    borderColor: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 12,
    fontWeight: 'bold',
  },
  date: {
    color: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
})
