export interface Course {
  id: string;
  title: string;
  price: string;
  status: "Ongoing" | "Starting Soon";
  meta: string;
  highlight?: string;
  features: string[];
  badge?: string;
}

export const courses: Course[] = [
  {
    id: "al-2027",
    title: "2027 A/L Biology",
    price: "Rs. 2000",
    status: "Ongoing",
    meta: "Monthly · English Medium",
    badge: "Enrolling Now",
    features: [
      "Complete theory coverage",
      "MCQ discussions",
      "SEQ preparation",
      "Model papers",
      "Revision sessions",
      "Digital notes",
    ],
  },
  {
    id: "al-2028",
    title: "2028 A/L Biology",
    price: "Rs. 2000",
    status: "Starting Soon",
    meta: "Started 8 July 2026 · English Medium",
    highlight: "First Session FREE · Topic: Photosynthesis",
    badge: "New Batch",
    features: [
      "Complete theory coverage",
      "MCQ discussions",
      "SEQ preparation",
      "Model papers",
      "Revision sessions",
      "Digital notes",
    ],
  },
];
