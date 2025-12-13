'use client'

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig
} from '@chakra-ui/react'
import {
  ColorModeProvider
} from './color-mode';

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: {
          value: '"Montserrat", sans-serif'
        },
        body: {
          value: '"Montserrat", sans-serif',
        }
      }
    }
  },
  globalCss: {
    "html, body": {
      bgColor: "#1B1716",
      color: "white",
      fontOpticalSizing: "auto",
      fontStyle: "normal",
      margin: 0,
      padding: 0
    }
  }
})

const system = createSystem(defaultConfig, config);

export function Provider(props) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}