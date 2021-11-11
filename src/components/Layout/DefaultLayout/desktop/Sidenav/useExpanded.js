import { useState } from 'react'

export const useExpanded = (initialIsExpanded) => {
  const [isExpanded, setIsExpanded] = useState(initialIsExpanded)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
    localStorage.setItem('@Rita/Menu/Expanded', JSON.stringify(!isExpanded))
  }

  return [isExpanded, toggleExpanded]
}
