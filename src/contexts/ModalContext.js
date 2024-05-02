import { createContext, useContext, useReducer } from 'react';

const ModalContext = createContext();

const modalReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, [action.modalName]: true };
    case 'CLOSE_MODAL':
      return { ...state, [action.modalName]: false };
    default:
      throw new Error(`unhandled action type: ${action.type}`);
  }
};

export const ModalProvider = ({ children }) => {
  const [modalState, dispatch] = useReducer(modalReducer, {});

  const openModal = (modalName) => {
    dispatch({ type: 'OPEN_MODAL', modalName });
  };

  const closeModal = (modalName) => {
    dispatch({ type: 'CLOSE_MODAL', modalName });
  };

  return (
    <ModalContext.Provider value={{ modalState, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
