import { useEffect, useState } from 'react'

const useTypewriter = (words, speed = 100, delay = 1500) => {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)

        if (charIndex === currentWord.length) {
          setTimeout(() => setDeleting(true), delay)
        }
      } else {
        setText(currentWord.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)

        if (charIndex === 0) {
          setDeleting(false)
          setWordIndex((wordIndex + 1) % words.length)
        }
      }
    }, deleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex, words, speed, delay])

  return text
}
export default useTypewriter