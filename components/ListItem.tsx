import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckBox } from "react-native-elements";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ListItemType } from "../utils";
import { ListView } from "./ListView";

interface Props {
  item: ListItemType;
  onSelect: (item: ListItemType) => void;
  selectedItems: number[];
}

const ListItem = ({ item, onSelect, selectedItems }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  const handleCheckboxChange = () => onSelect(item);

  const renderNestedItems = () => {
    if (!expanded || !item.data) return null;

    return (
      <ListView
        data={item.data}
        onSelect={onSelect}
        selectedItems={selectedItems}
      />
    );
  };

  const isParent = item?.data;
  const isSelected = selectedItems.includes(item?.id);

  const { itemContainer, rowStyle } = styles;

  return (
    <>
      <View style={itemContainer}>
        <View>
          <View style={rowStyle}>
            <CheckBox
              checked={isSelected}
              onPress={handleCheckboxChange}
              containerStyle={{ padding: 0 }}
            />
            <Text
              style={{ flex: 1 }}
              onPress={handleToggle}
              disabled={!isParent}
            >
              {item.title}
            </Text>
            {isParent && (
              <AntDesign
                size={16}
                name={expanded ? "up" : "down"}
                onPress={handleToggle}
                disabled={!isParent}
              />
            )}
          </View>
        </View>
        {expanded && isParent && renderNestedItems()}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  rowStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export { ListItem };
