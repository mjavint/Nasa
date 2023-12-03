import { format, sub } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import Header from '../components/Header'
import LastFiveDaysImages from '../components/LastFiveDaysImages'
import TodaysImage from '../components/TodaysImage'
import { PostImageType } from '../types'
import fetchAPi from '../utils/fetch'

export default function Home() {
  const [todaysImage, setTodaysImage] = useState<PostImageType>({})
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImageType[]>(
    [],
  )

  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse: PostImageType = await fetchAPi()
        setTodaysImage(todaysImageResponse)
      } catch (error) {
        console.error(error)
        setTodaysImage({})
      }
    }

    const loadLastFiveDaysImages = async () => {
      try {
        const date = new Date()
        const todaysDate = format(date, 'yyyy-MM-dd')
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), 'yyyy-MM-dd')
        const lastFiveDaysImagesResponse = await fetchAPi(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`,
        )
        setLastFiveDaysImages(lastFiveDaysImagesResponse)
      } catch (error) {
        console.error(error)
        setLastFiveDaysImages([])
      }
    }

    loadTodaysImage().catch(null)
    loadLastFiveDaysImages().catch(null)
  }, [])

  // console.log(lastFiveDaysImages)

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastFiveDaysImages postImages={lastFiveDaysImages} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(7,26,93,255)',
  },
})
