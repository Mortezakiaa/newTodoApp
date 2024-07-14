export type Status = "todo" | "in progress" | "done";
export interface TTask {
  _id: string;
  title: string;
  status: Status;
}
export interface TTodoCard {
  name: Status;
  data: TTask[];
}
export type TChildren = { children: React.ReactNode };
export interface TRadionButton {
  Value: string;
  ChangeStatus: (e: any) => void;
  Checked: boolean;
}
