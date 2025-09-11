// jest.setup.ts
import {
  TextEncoder as NodeTextEncoder,
  TextDecoder as NodeTextDecoder,
} from 'util'
import '@testing-library/jest-dom'
// import 'whatwg-fetch'

// Assign the classes directly, DO NOT call them
;(global as any).TextEncoder = NodeTextEncoder
;(global as any).TextDecoder = NodeTextDecoder
