import { createContext, useState, ReactNode } from 'react';

export const ChallengesContext = createContext({} as IChallengesContextData);

interface IChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenges: () => void;
}

interface IChallengesProvider {
  children: ReactNode;
}

export function ChallengesProvider({ children }: IChallengesProvider) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenges() {
    console.log('New Challenges');
  }

  return (
    <ChallengesContext.Provider value={{ level, currentExperience, challengesCompleted, levelUp, startNewChallenges }}>
      {children}
    </ChallengesContext.Provider>
  );
}
