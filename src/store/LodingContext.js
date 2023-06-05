import { createContext, useState } from "react";

export const LoadingContext = createContext(null);

function Load({ children }) {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export default Load;