import { createContext, useCallback, useContext, useState, ReactNode } from 'react';

interface IDrawerOption {
  icon: string;
  path: string;
  label: string;
}

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  drawerOptions: IDrawerOption[];
  setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
}

// Criando o contexto do Drawer
const DrawerContext = createContext({} as IDrawerContextData);

// Hook para usar o contexto do Drawer
export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

// Definindo as propriedades do DrawerProvider
interface DrawerProviderProps {
  children: ReactNode; // Aqui você define que children é do tipo ReactNode
}

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
    setDrawerOptions(newDrawerOptions);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions }}>
      {children}
    </DrawerContext.Provider>
  );
};
