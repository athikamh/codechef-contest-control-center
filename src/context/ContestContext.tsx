"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";

import {
  participants as initialParticipants,
  Participant,
} from "@/data/contestData";

interface ContestContextType {
  participants: Participant[];

  leaderboard: Participant[];

  isFrozen: boolean;

  toggleFreeze: () => void;

  rejudge: (name: string) => void;

  resetContest: () => void;
}

const ContestContext = createContext<ContestContextType | undefined>(
  undefined
);

export function ContestProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [participants, setParticipants] =
    useState<Participant[]>(initialParticipants);

  const [isFrozen, setIsFrozen] = useState(false);

  const [frozenLeaderboard, setFrozenLeaderboard] =
    useState<Participant[]>([]);

  const calculateLeaderboard = (data: Participant[]) =>
    [...data].sort((a, b) => {
      if (b.solved !== a.solved) {
        return b.solved - a.solved;
      }

      return a.penalty - b.penalty;
    });

  const liveLeaderboard = useMemo(
    () => calculateLeaderboard(participants),
    [participants]
  );

  const leaderboard = isFrozen
    ? frozenLeaderboard
    : liveLeaderboard;

  function toggleFreeze() {
    if (!isFrozen) {
      setFrozenLeaderboard(liveLeaderboard);
      setIsFrozen(true);
    } else {
      setFrozenLeaderboard([]);
      setIsFrozen(false);
    }
  }

  function rejudge(name: string) {
    setParticipants((prev) =>
      prev.map((p) => {
        if (p.name !== name) return p;

        if (p.solved > 0) {
          return {
            ...p,
            solved: p.solved - 1,
            score: p.score - 100,
            penalty: p.penalty + 20,
          };
        }

        return p;
      })
    );
  }

  function resetContest() {
    setParticipants(initialParticipants);
    setFrozenLeaderboard([]);
    setIsFrozen(false);
  }

  return (
    <ContestContext.Provider
      value={{
        participants,
        leaderboard,
        isFrozen,
        toggleFreeze,
        rejudge,
        resetContest,
      }}
    >
      {children}
    </ContestContext.Provider>
  );
}

export function useContest() {
  const context = useContext(ContestContext);

  if (!context) {
    throw new Error(
      "useContest must be used inside ContestProvider"
    );
  }

  return context;
}