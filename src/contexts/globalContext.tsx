import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type Props = {
  children: React.ReactNode;
};

type ContextType = {
  isChatOpen?: boolean;
  setIsChatOpen: Dispatch<SetStateAction<boolean>>;
};

const GlobalContext = createContext<ContextType>({
  isChatOpen: false,
  setIsChatOpen: () => null,
});

const GlobalProvider = ({ children }: Props) => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        isChatOpen,
        setIsChatOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

function useGlobalContext() {
  return useContext(GlobalContext);
}

export { GlobalContext, GlobalProvider, useGlobalContext };
