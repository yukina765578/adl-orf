export interface NotionModalContent {
  properties: {
    配置番号?: {
      number: number;
    };
    展示名?: {
      title: Array<{ plain_text: string }>;
    };
    展示者?: {
      rich_text: Array<{ plain_text: string }>;
    };
    展示概要?: {
      rich_text: Array<{ plain_text: string }>;
    };
    学年?: {
      select: {
        name: Grade;
      };
    };
    展示表紙?: {
      files: Array<{
        file?: { url: string };
        external?: { url: string };
        name: string;
      }>;
    };
    展示内容リンク?: {
      url: string; 
    };
  };
}

export type Grade = 'B1' | 'B2' | 'B3' | 'B4' | 'M1' | 'M2';

export interface PopupContent {
  id: number;
  modalTitle: string;
  name: string;
  modalContent: string;
  grade: Grade;
  modalImage: string;
  contentUrl?: string; 
  buttonPosition: {
    width: number;
    height: number;
  };
}