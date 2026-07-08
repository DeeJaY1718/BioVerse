export interface VaultResource {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export const vaultResources: VaultResource[] = [
  {
    id: "cell-structure-notes",
    title: "Cell Structure & Function — Short Notes",
    description: "Concise unit summary covering organelles, transport and cell theory for rapid revision.",
    tag: "Short Notes",
  },
  {
    id: "genetics-mcq-pack",
    title: "Genetics MCQ Sprint Pack",
    description: "Timed MCQ set targeting Mendelian genetics, mutations and inheritance patterns.",
    tag: "MCQ Sprint",
  },
  {
    id: "photosynthesis-seq",
    title: "Photosynthesis — SEQ Mastery Set",
    description: "Model structured-essay answers and marking guidance for the photosynthesis unit.",
    tag: "SEQ Mastery",
  },
  {
    id: "human-physiology-marathon",
    title: "Human Physiology Essay Marathon",
    description: "High-scoring essay practice covering circulation, excretion and coordination systems.",
    tag: "Essay Marathon",
  },
  {
    id: "biocheck-ecology",
    title: "Ecology BioCheck Challenge",
    description: "True/False rapid-fire statements to stress-test your conceptual understanding of ecology.",
    tag: "BioCheck",
  },
  {
    id: "microbiology-notes",
    title: "Microbiology — Short Notes",
    description: "Unit-wise breakdown of microorganisms, classification and applications for quick review.",
    tag: "Short Notes",
  },
];

export interface FreeResource {
  id: string;
  title: string;
  description: string;
  type: string;
}

export const freeResources: FreeResource[] = [
  {
    id: "free-intro-notes",
    title: "Introduction to Biological Molecules",
    description: "A free sample of BioVerse Short Notes to experience our concept-first teaching approach.",
    type: "Free Notes",
  },
  {
    id: "free-revision-guide",
    title: "A/L Biology Revision Roadmap",
    description: "A guided revision plan to help you structure your final months before the exam.",
    type: "Revision Guide",
  },
  {
    id: "free-sample-questions",
    title: "Photosynthesis Sample Question Set",
    description: "A small set of sample MCQs and structured questions from our upcoming 2028 batch.",
    type: "Sample Questions",
  },
];
