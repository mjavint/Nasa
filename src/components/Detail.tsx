import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/native-stack'

import { RootStackParams } from '../types'
import Header from './Header'

export default function Detail() {
  const {
    params: { date, title, url, explanation },
  } = useRoute<NativeStackScreenProps<RootStackParams, 'Detail'>['route']>()

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image
          source={{ uri: url }}
          style={styles.image}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(7,26,93,255)',
  },
  content: {
    flex: 1,
    backgroundColor: '#2c449d',
    borderRadius: 32,
    marginVertical: 24,
    padding: 16,
  },
  image: {
    width: '100%',
    height: '50%',
    borderRadius: 16,
    marginBottom: 16,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  date: {
    color: '#fff',
    fontSize: 16,
  },
  explanationContainer: {
    marginVertical: 16,
  },
  explanation: {
    color: '#fff',
  },
})
