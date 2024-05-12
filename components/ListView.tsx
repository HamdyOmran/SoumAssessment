import { FlatList } from "react-native";
import { ListItem } from "./ListItem";
import { ListItemType } from "../utils";

interface Props {
  data: ListItemType[];
  onSelect: (item: ListItemType) => void;
  selectedItems: number[];
}

const ListView = ({ data, onSelect, selectedItems }: Props) => {
  const renderItem = ({ item }: { item: ListItemType }) => {
    return (
      <ListItem item={item} onSelect={onSelect} selectedItems={selectedItems} />
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

export { ListView };
