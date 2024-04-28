import { useState } from "react";
import MyContext from "./mycontext";

function MyState({ children }) {
  //  useState for loading component
  const [loading, setLoading] = useState(false);
  return (
    <MyContext.Provider value={{ loading, setLoading }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyState;
