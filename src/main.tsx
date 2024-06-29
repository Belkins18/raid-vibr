import { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import WebApp from '@twa-dev/sdk'

import { Loader } from '@/components/uikit'
import { App } from './App.tsx'

import '@/assets/styles/index.scss'

// Create a client
const queryClient = new QueryClient()

WebApp.ready()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense
      fallback={
        <div className="main-loader">
          <Loader width={'100'} />
        </div>
      }
    >
      <QueryClientProvider client={queryClient}>
        <App />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </Suspense>
  </StrictMode>,
)
