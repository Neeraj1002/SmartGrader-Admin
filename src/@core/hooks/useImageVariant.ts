// React Imports
import { useMemo } from 'react'


export const useImageVariant = (imgLight: string, imgDark: string): string => {
  // Hooks


  return useMemo(() => {
   
    const isDarkMode = false

    return isDarkMode ? imgDark : imgLight
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ])
}
