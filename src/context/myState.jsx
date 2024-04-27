import { useState } from "react";
import MyContext from "./mycontext";

function MyState({ Children }) {
  const [loading, setLoading] = useState(false)
  return <MyContext.Provider value={{
    loading, setLoading
  }}>{Children}</MyContext.Provider>;
}
export default MyState;