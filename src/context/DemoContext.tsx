import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface DemoContextType {
  isDemoModalOpen: boolean;
  openDemoModal: () => void;
  closeDemoModal: () => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const DemoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  return (
    <DemoContext.Provider
      value={{ isDemoModalOpen, openDemoModal, closeDemoModal }}
    >
      {children}
    </DemoContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDemo = () => {
  const context = useContext(DemoContext);
  if (context === undefined) {
    throw new Error("useDemo must be used within a DemoProvider");
  }
  return context;
};
