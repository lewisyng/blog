import { useState, useEffect } from 'react'

export function useCalculateReadingTime(wordCount) {
  const [readingTime, setReadingTime] = useState(null)
  const wpm = 250 // estimated words read per minute on average

  useEffect(() => {
    const time = Math.ceil(wordCount / wpm)
    setReadingTime(time)
  }, [])

  return [readingTime]
}

export default useCalculateReadingTime