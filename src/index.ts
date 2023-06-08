import { promises as fs } from 'node:fs'
import getTheme from './theme'

fs.mkdir('./themes', { recursive: true })
   .then(() => Promise.all([
      fs.writeFile(
         './themes/lumos-light.json',
      `${JSON.stringify(getTheme({
        style: 'light',
        name: 'Lumos Light',
      }), null, 2)}\n`,
      ),
      fs.writeFile(
         './themes/lumos-dark.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Lumos Dark',
      }), null, 2)}\n`,
      ),
      fs.writeFile(
         './themes/lumos-black.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Lumos Black',
        black: true,
      }), null, 2)}\n`,
      ),
      fs.writeFile(
         './themes/lumos-light-soft.json',
      `${JSON.stringify(getTheme({
        style: 'light',
        name: 'Lumos Light Soft',
        soft: true,
      }), null, 2)}\n`,
      ),
      fs.writeFile(
         './themes/lumos-dark-soft.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Lumos Dark Soft',
        soft: true,
      }), null, 2)}\n`,
      ),
   ]))
   .catch(() => process.exit(1))
