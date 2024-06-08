import { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import { Loader } from '@/components/uikit'
import { App } from './App.tsx'

import '@/assets/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense
      fallback={
        <div className="main-loader">
          <Loader width={'100'} />
        </div>
      }
    >
      <App />
    </Suspense>
  </StrictMode>,
)
