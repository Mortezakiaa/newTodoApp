export interface TTask {
  _id: string;
  title: string;
  status: "todo" | "in progress" | "done";
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
