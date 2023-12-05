import React from 'react';
import { Text, View, Image, Switch, SafeAreaView, FlatList, TouchableOpacity, Modal } from "react-native";
import { Stack } from "expo-router";

import styles from "./topicList.style";

// Contains an ItemRenderer, List of topics, FlatList, and user interaction for selection of topics
// Currently users can select as many topics as they would like

const ItemRenderer = ({ index, label, selected, onUpdateValue }) => <View style={styles.item}>
  <Text style={styles.topicTitle}>{label}</Text>
  <Switch value={selected} onValueChange={(value) => onUpdateValue(index, value)} />
</View>

const TopicList = () => {
    const [open, setOpen] = React.useState(false)
    const [data, setData] = React.useState([
      { label: 'Politics', selected:false },
      { label: 'Gaming', },
      { label: 'Movies', },
      { label: 'Music', },
      { label: 'Literature', },
      { label: 'Economics', },
    ])
    openList = () => setOpen(true)
    closeList = () => setOpen(false)
    onUpdateValue = (index, value) => { data[index].selected = value; return setData([...data]);}
    renderItem = ({ item, index }) => <ItemRenderer key={index} index={index} selected={item.selected} label={item.label} onUpdateValue={onUpdateValue} />
    return (
        <View style={styles.main}>
            <Stack screenOptions={{headerShown: false}} />

            <TouchableOpacity onPress={openList}>
            <View style={{ padding: 6, borderWidth: 1, borderColor: '#000' }}>
                <Text>Choose Your Topics</Text>
            </View>
            </TouchableOpacity>
            <View>
            <Text>Selected Items</Text>
            {data.filter(item => item.selected).map(item => <Text key={item.label}>{item.label}</Text>)}
            </View>
        
            <Modal animationType='slide' transparent={true} visible={open === true}>
                <TouchableOpacity activeOpacity={1} onPress={closeList} style={{ flex: 1 }}>
                <View style={{ flex: 1, marginTop: 250 }}>
                    <View style={styles.listWrapper}>
                    <View style={styles.listContainer}>
                        <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.label}
                        />
                    </View>
                    </View>
                </View>
                </TouchableOpacity>
            </Modal>

        </View>
    );
}




export default TopicList;