export interface NotionModalContent {
  id: number;
  modalTitle: string;
  name: string;
  modalContent: string;
  grade: Grade;
  modalImage: string;
  contentUrl?: string[];
}

export type Grade = 'B1' | 'B2' | 'B3' | 'B4' | 'M1' | 'M2' | '';  

export interface PopupContent {
  id: number;
  modalTitle: string;
  name: string;
  modalContent: string;
  grade: Grade;
  modalImage: string;
  contentUrl?: string[];
  buttonPosition: {
    width: number;
    height: number;
  };
}
