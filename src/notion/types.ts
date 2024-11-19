// 使用可能なグレードの定義
export type Grade = 'B1' | 'B2' | 'B3' | 'B4' | 'M1' | 'M2';

export interface NotionModalContent {
  properties: {
    id?: {
      number: number;
    };
    title?: {
      title: Array<{ plain_text: string }>;
    };
    name?: {
      rich_text: Array<{ plain_text: string }>;
    };
    modalContent?: {
      rich_text: Array<{ plain_text: string }>;
    };
    grade?: {
      select: {
        name: Grade;  // セレクト型に変更
      };
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
  grade: Grade;  // 型を制限
  modalImage: string;
  buttonPosition: {
    width: number;
    height: number;
  };
}