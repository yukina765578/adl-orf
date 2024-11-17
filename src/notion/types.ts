export interface NotionModalContent {
    id: string;
    properties: {
      title: {
        title: Array<{ plain_text: string }>;
      };
      name: {
        rich_text: Array<{ plain_text: string }>;
      };
      modalContent: {
        rich_text: Array<{ plain_text: string }>;
      };
    };
  }
  
  export interface PopupContent {
    id: number;
    modalTitle: string;
    name: string;
    modalContent: string;
    buttonPosition: {
      width: number;
      height: number;
    };
  }