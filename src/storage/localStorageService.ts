import { NotionModalContent } from "../notion/types";

const STORAGE_KEY = "adl_orf_modal_contents";

// Dummy data for 20 modal contents
const DUMMY_DATA: NotionModalContent[] = [
  // Lounge entries (1-10)
  {
    id: 1,
    modalTitle: "Lounge Project 1",
    name: "Student A",
    modalContent:
      "This is a sample project description for Lounge area.\nMultiple lines are supported.",
    grade: "B3",
    modalImage: "https://via.placeholder.com/400x300?text=Lounge+1",
  },
  {
    id: 2,
    modalTitle: "Lounge Project 2",
    name: "Student B",
    modalContent: "Another sample project in the Lounge area.",
    grade: "B4",
    modalImage: "https://via.placeholder.com/400x300?text=Lounge+2",
  },
  {
    id: 3,
    modalTitle: "Lounge Project 3",
    name: "Student C",
    modalContent: "Creative work displayed in Lounge.",
    grade: "M1",
    modalImage: "https://via.placeholder.com/400x300?text=Lounge+3",
  },
  {
    id: 4,
    modalTitle: "Lounge Project 4",
    name: "Student D",
    modalContent: "Innovative design project.",
    grade: "B2",
    modalImage: "https://via.placeholder.com/400x300?text=Lounge+4",
  },
  {
    id: 5,
    modalTitle: "Lounge Project 5",
    name: "Student E",
    modalContent: "Research and development work.",
    grade: "M2",
    modalImage: "https://via.placeholder.com/400x300?text=Lounge+5",
  },
  {
    id: 6,
    modalTitle: "Lounge Project 6",
    name: "Student F",
    modalContent: "Experimental artwork.",
    grade: "B1",
    modalImage: "https://via.placeholder.com/400x300?text=Lounge+6",
  },
  {
    id: 7,
    modalTitle: "Lounge Project 7",
    name: "Student G",
    modalContent: "Collaborative project showcase.",
    grade: "B3",
    modalImage: "https://via.placeholder.com/400x300?text=Lounge+7",
  },
  {
    id: 8,
    modalTitle: "Lounge Project 8",
    name: "Student H",
    modalContent: "Digital media creation.",
    grade: "B4",
    modalImage: "https://via.placeholder.com/400x300?text=Lounge+8",
  },
  {
    id: 9,
    modalTitle: "Lounge Project 9",
    name: "Student I",
    modalContent: "Interactive installation.",
    grade: "M1",
    modalImage: "https://via.placeholder.com/400x300?text=Lounge+9",
  },
  {
    id: 10,
    modalTitle: "Lounge Project 10",
    name: "Student J",
    modalContent: "Final year project.",
    grade: "M2",
    modalImage: "https://via.placeholder.com/400x300?text=Lounge+10",
  },

  // Atelier2 entries (11-14)
  {
    id: 11,
    modalTitle: "Atelier2 Project 1",
    name: "Student K",
    modalContent: "Workshop project from Atelier 2.",
    grade: "B2",
    modalImage: "https://via.placeholder.com/400x300?text=Atelier2+1",
  },
  {
    id: 12,
    modalTitle: "Atelier2 Project 2",
    name: "Student L",
    modalContent: "Hands-on creative work.",
    grade: "B3",
    modalImage: "https://via.placeholder.com/400x300?text=Atelier2+2",
  },
  {
    id: 13,
    modalTitle: "Atelier2 Project 3",
    name: "Student M",
    modalContent: "Practical design exercise.",
    grade: "B4",
    modalImage: "https://via.placeholder.com/400x300?text=Atelier2+3",
  },
  {
    id: 14,
    modalTitle: "Atelier2 Project 4",
    name: "Student N",
    modalContent: "Studio-based project.",
    grade: "M1",
    modalImage: "https://via.placeholder.com/400x300?text=Atelier2+4",
  },

  // Atelier1 entries (15-20)
  {
    id: 15,
    modalTitle: "Atelier1 Project 1",
    name: "Student O",
    modalContent: "Advanced studio work from Atelier 1.",
    grade: "M2",
    modalImage: "https://via.placeholder.com/400x300?text=Atelier1+1",
  },
  {
    id: 16,
    modalTitle: "Atelier1 Project 2",
    name: "Student P",
    modalContent: "Conceptual art piece.",
    grade: "B1",
    modalImage: "https://via.placeholder.com/400x300?text=Atelier1+2",
  },
  {
    id: 17,
    modalTitle: "Atelier1 Project 3",
    name: "Student Q",
    modalContent: "Experimental design.",
    grade: "B2",
    modalImage: "https://via.placeholder.com/400x300?text=Atelier1+3",
  },
  {
    id: 18,
    modalTitle: "Atelier1 Project 4",
    name: "Student R",
    modalContent: "Thesis project.",
    grade: "M1",
    modalImage: "https://via.placeholder.com/400x300?text=Atelier1+4",
  },
  {
    id: 19,
    modalTitle: "Atelier1 Project 5",
    name: "Student S",
    modalContent: "Portfolio piece.",
    grade: "M2",
    modalImage: "https://via.placeholder.com/400x300?text=Atelier1+5",
  },
  {
    id: 20,
    modalTitle: "Atelier1 Project 6",
    name: "Student T",
    modalContent: "Graduation project showcase.",
    grade: "B4",
    modalImage: "https://via.placeholder.com/400x300?text=Atelier1+6",
  },
];

/**
 * Initialize local storage with dummy data if not already present
 */
export const initializeStorage = (): void => {
  const existingData = localStorage.getItem(STORAGE_KEY);
  if (!existingData) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DUMMY_DATA));
  }
};

/**
 * Get all modal contents from local storage
 */
export const getModalContents = (): NotionModalContent[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    // Initialize with dummy data if not present
    initializeStorage();
    return DUMMY_DATA;
  }
  return JSON.parse(data);
};

/**
 * Save modal contents to local storage
 */
export const saveModalContents = (contents: NotionModalContent[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contents));
};

/**
 * Reset to dummy data
 */
export const resetToDefaults = (): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(DUMMY_DATA));
};

/**
 * Update a single modal content by ID
 */
export const updateModalContent = (
  id: number,
  updatedContent: Partial<NotionModalContent>,
): void => {
  const contents = getModalContents();
  const index = contents.findIndex((content) => content.id === id);
  if (index !== -1) {
    contents[index] = { ...contents[index], ...updatedContent };
    saveModalContents(contents);
  }
};

/**
 * Delete a modal content by ID
 */
export const deleteModalContent = (id: number): void => {
  const contents = getModalContents();
  const filtered = contents.filter((content) => content.id !== id);
  saveModalContents(filtered);
};

/**
 * Add a new modal content
 */
export const addModalContent = (content: NotionModalContent): void => {
  const contents = getModalContents();
  contents.push(content);
  saveModalContents(contents);
};
