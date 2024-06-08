import { createContext, ReactNode, useCallback, useState } from 'react'
import { createPortal } from 'react-dom'

export const ModalContext = createContext<{
  closeModal: () => void
  showModal: (modal: ReactNode) => void
}>({
  showModal: () => {},
  closeModal: () => {},
})

export const ModalProvider = ({ children }: { children?: ReactNode }) => {
  const [modals, setModals] = useState<ReactNode[]>([])

  const showModal = (modal: ReactNode) => {
    setModals((state) => [...state, modal])
  }

  const closeModal = useCallback(() => {
    setModals(modals.slice(-1))
  }, [modals])

  return (
    <ModalContext.Provider
      value={{
        closeModal,
        showModal,
      }}
    >
      {children}

      {modals.length
        ? createPortal(
            modals.map((modal, i) => (
              <div
                key={i}
                style={{
                  position: 'fixed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  left: 0,
                  top: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 1000 + i,
                }}
              >
                {modal}
              </div>
            )),
            document.body,
          )
        : null}
    </ModalContext.Provider>
  )
}
