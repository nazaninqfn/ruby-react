import { createContext, useState } from "react";
import { getItem } from "../../core/services/storage/storage";

export const UserContext = createContext();
const userObj = getItem("user") ? JSON.parse(getItem("user")) : null;

export default function UserProvider({ children }) {
  const [user, setUser] = useState(userObj);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
