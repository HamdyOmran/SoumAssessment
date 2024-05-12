import { ListItemType } from "./types";

export const markItemAsSelected = (
  item: ListItemType,
  selectedItems: number[]
) => {
  selectedItems.push(item?.id);
  if (item?.data) {
    for (const dataItem of item?.data) {
      markItemAsSelected(dataItem, selectedItems);
    }
  }
};

export const removeItemFromSelected = (
  item: ListItemType,
  selectedItems: number[]
) => {
  const numberSet = new Set(item?.parentIds);
  const filteredList = selectedItems.filter(
    (num) => !numberSet.has(num) && num !== item?.id
  );
  return filteredList;
};
