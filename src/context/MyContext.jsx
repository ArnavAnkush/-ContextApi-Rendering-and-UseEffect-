import { createContext } from "react";

// consumer
export const MyStore = createContext();

// provider
export const ContextProvider = ({children}) => {
    return <MyStore.Provider>{children}</MyStore.Provider>
}

