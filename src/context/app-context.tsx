import { PROJECTS } from "@/data/projects";
import { createContext, useContext, useState } from "react";

export const AppContext = createContext<{
  modalOpen: boolean;
  modalData: (typeof PROJECTS)[0] | null;
  openModal: (data: (typeof PROJECTS)[0]) => void;
  closeModal: () => void;
}>({
  modalOpen: false,
  modalData: null,
  openModal: () => {},
  closeModal: () => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<(typeof PROJECTS)[0] | null>(null);

  const openModal = (data: (typeof PROJECTS)[0]) => {
    setModalData(data);
    setModalOpen(true);
  };

  const closeModal = () => {
    // Delay closing the modal to allow the animation to finish
    setTimeout(() => {
      setModalData(null);
    }, 500);
    setModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{ modalOpen, modalData, openModal, closeModal }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
