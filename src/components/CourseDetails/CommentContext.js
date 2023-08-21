import { createContext, useState } from "react";
import { getItem } from "../../core/services/storage/storage";

export const UserContext = createContext();
const commentObj = getItem("comment") ? JSON.parse(getItem("comment")) : null;

export default function UserProvider({ children }) {
  const [comment, setComment] = useState(commentObj);

  return (
    <CommentContext.Provider value={{ comment, setComment }}>
      {children}
    </CommentContext.Provider>
  );
}
