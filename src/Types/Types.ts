export interface TTask {
  _id: string;
  title: string;
}
export interface TTodoCard {
  name: string;
  data: TTask[];
}
export type TChildren = { children: React.ReactNode };
export interface TRadionButton {
  Value: string;
  ChangeStatus: (e: any) => void;
  Checked: boolean;
}
