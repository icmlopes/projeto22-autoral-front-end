import { createContext, useState } from "react";

export const infoContext = createContext();

export default function InfoProvider({ children }) {
  const [user, setUser] = useState([]);

  return <infoContext.Provider value={{ user, setUser }}>{children}</infoContext.Provider>;
}

// Não sei porque está tirando o () do return quando salvo
