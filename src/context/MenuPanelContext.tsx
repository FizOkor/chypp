import { createContext, useContext, useState, useRef, useEffect } from 'react';
import type { ReactNode } from 'react';

// Define the shape of our context value
interface MenuPanelContextType {
  menuPanelRef: React.RefObject<HTMLElement | null> ;
  menuPanelWidth: number;
}

// Create the context with a default value
const MenuPanelContext = createContext<MenuPanelContextType | undefined>(undefined);

// Create the provider component
export const MenuPanelProvider = ({ children }: { children: ReactNode }) => {
  const menuPanelRef = useRef<HTMLElement>(null);
  const [menuPanelWidth, setMenuPanelWidth] = useState(0);

  useEffect(() => {
    // Measure the width after the component mounts
    const updateWidth = () => {
      if (menuPanelRef.current) {
        setMenuPanelWidth(menuPanelRef.current.offsetWidth);
      }
    };

    updateWidth(); // Initial measurement

    // Add a resize listener to update the width if the screen size changes
    window.addEventListener('resize', updateWidth);
    
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <MenuPanelContext.Provider value={{ menuPanelRef, menuPanelWidth }}>
      {children}
    </MenuPanelContext.Provider>
  );
};

// Create a custom hook to consume the context
export const useMenuPanel = () => {
  const context = useContext(MenuPanelContext);
  if (context === undefined) {
    throw new Error('useMenuPanel must be used within a MenuPanelProvider');
  }
  return context;
};
