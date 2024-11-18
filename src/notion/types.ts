export interface NotionModalContent {
  properties: {
    title?: {
      title: Array<{ plain_text: string }>;
    };
    name?: {
      rich_text: Array<{ plain_text: string }>;
    };
    modalContent?: {
      rich_text: Array<{ plain_text: string }>;
    };
    modalImage?: {
      files: Array<{
        file?: { url: string };
        external?: { url: string };
        name: string;
      }>;
    };
  };
}

export interface PopupContent {
  id: number;
  modalTitle: string;
  name: string;
  modalContent: string;
  modalImage: string;
  buttonPosition: {
    width: number;
    height: number;
  };
}