import typescript from "@rollup/plugin-typescript"

export default {
  input: './src/packages/react/index.tsx',
  output: {dir: './dist', format: 'esm'},
  plugins: [typescript()]
}
