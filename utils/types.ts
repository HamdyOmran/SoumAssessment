export interface ListItemType {
  id: number;
  parentIds: number[];
  title: string;
  data?: ListItemType[];
}
