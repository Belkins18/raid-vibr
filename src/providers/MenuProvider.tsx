import { ReactNode, createContext, useState } from 'react'

export const MenuContext = createContext({
  isMenuOpen: true,
  toggleMenu: () => {},
})

export const MenuProvider = ({ children }: { children?: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}
