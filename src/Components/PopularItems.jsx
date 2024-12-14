

import { useTheme } from '@emotion/react'
import { PopularWrapper } from './PopularWrapper'

const PopularItems = () => {
    const theme = useTheme()
  return (
    <>
    <PopularWrapper>
        Hey i ma in the popular items
    </PopularWrapper>
    </>
)
}

export default PopularItems