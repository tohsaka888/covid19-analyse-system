// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}
// '0px 0px 10px 5px #f9f9f9' : '0px 0px 20px 10px #1b2d50'
const shadows = {
  light: '0px 0px 10px 5px #e8e8e8',
  dark: '0px 0px 10px 5px #1b2d50',
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme
export { shadows }