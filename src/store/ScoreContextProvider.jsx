import { createContext, useState } from "react";

export const ScoreContext = createContext({
  score: 0,
  setScore: () => {},
});
function ScoreContextProvider({ children }) {
  const [score, setScore] = useState(0);
  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
}
export default ScoreContextProvider;
