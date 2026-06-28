export interface Participant {
  name: string;
  college: string;
  solved: number;
  penalty: number;
  score: number;
  status: "Online" | "Offline";
}

export const participants: Participant[] = [
  {
    name: "Athika",
    college: "VIT Chennai",
    solved: 8,
    penalty: 123,
    score: 800,
    status: "Online",
  },
  {
    name: "Rahul",
    college: "IIT Madras",
    solved: 7,
    penalty: 145,
    score: 700,
    status: "Online",
  },
  {
    name: "Priya",
    college: "NIT Trichy",
    solved: 7,
    penalty: 182,
    score: 700,
    status: "Offline",
  },
  {
    name: "Arjun",
    college: "BITS Pilani",
    solved: 6,
    penalty: 201,
    score: 600,
    status: "Online",
  },
];