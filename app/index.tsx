import { useState } from "react";
import { SafeAreaView } from "react-native";

import { ListView } from "@/components";

import {
  ListItemType,
  markItemAsSelected,
  mockData,
  removeItemFromSelected,
} from "../utils";

export default function Page() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleSelectItem = (item: ListItemType) => {
    let updatedSelectedItems = [...selectedItems];
    const itemId = item?.id;

    if (itemId) {
      const index = updatedSelectedItems.indexOf(itemId);
      if (index === -1) markItemAsSelected(item, updatedSelectedItems);
      else updatedSelectedItems = removeItemFromSelected(item, selectedItems);
    }

    setSelectedItems(updatedSelectedItems);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ListView
        data={mockData}
        onSelect={handleSelectItem}
        selectedItems={selectedItems}
      />
    </SafeAreaView>
  );
}
