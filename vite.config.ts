import * as reactPlugin from 'vite-plugin-react'
import fs from 'fs';
import path from 'path';
import type { UserConfig } from 'vite'

const config: UserConfig = {
  jsx: 'react',
  plugins: [reactPlugin],
  https: true,
  httpsOptions: {
    key: fs.readFileSync(path.join(__dirname, './dist/certs/key.key')),
    cert: fs.readFileSync(path.join(__dirname, './dist/certs/cert.cert')),
  }
}

export default config
