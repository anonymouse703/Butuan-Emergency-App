// Import React
import React, { useEffect, useState } from 'react';
// Import required components
import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
  Switch,
  Linking
} from 'react-native';

const ExpandableComponent = ({ item, onClickFunction }) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  const openDialScreen = (contact) => {
    let number = contact;
    // alert(contact);
   if (Platform.OS === 'android') {
      number = 'tel:' + contact;
    }
    else {
      number = 'telprompt:' + contact;
    }

    Linking.openURL(number);
  };
  

  return (
    <View>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}>
        <Text style={styles.headerText}>
          {item.category_name}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: 'hidden',
        }}>
        {/*Content under the header of the Expandable List Item*/}
        {item.subcategory.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={styles.content}
            // onPress={
            //   () => alert('Id: ' + item.id + ' val: ' + item.val)
            // }>
            onPress={
              () => openDialScreen(item.val)
            }>
            <Text style={styles.text}>
              {item.val}
            </Text>
            <View style={styles.separator} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const App = () => {
  const [listDataSource, setListDataSource] = useState(CONTENT);
  const [multiSelect, setMultiSelect] = useState(false);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      // If multiple select is enabled
      array[index]['isExpanded'] = !array[index]['isExpanded'];
    } else {
      // If single select is enabled
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]['isExpanded'] =
            !array[placeindex]['isExpanded'])
          : (array[placeindex]['isExpanded'] = false),
      );
    }
    setListDataSource(array);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.multipleToggle}>
            <Text style={styles.multipleToggle__title}>
              {multiSelect
                ? 'Disable Multiple Expand'
                : 'Enable Multiple Expand'}
            </Text>
            <Switch
              value={multiSelect}
              onValueChange={(multiSelect) =>
                setMultiSelect(multiSelect)
              }
            />
        </View>
        <ScrollView>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#808080',
    width: '95%',
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#FFFFFF',
  },
   multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  {
    isExpanded: false,
    category_name: 'BCPO Tactical Operation Center - J.C Aquino',
    subcategory: [
      { id: 1, val: '09383893057' },
      { id: 2, val: '09985987257' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Butuan City Police Station 1 - J.C Aquino',
    subcategory: [
      { id: 3, val: '09989674792'},
      { id: 4, val: '09075501738'},
    ],
  },
  {
    isExpanded: false,
    category_name: 'Butuan City Police Station 2 - Langihan',
    subcategory: [
      { id: 5, val: '09196411020' },
      { id: 6, val: '09985987295' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Butuan City Police Station 3 - Brgy. Bayanihan',
    subcategory: [
      { id: 7, val: '09109428338' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Butuan City Police Station 4 - Brgy. Ampayon',
    subcategory: [
      { id: 8, val: '09186514097' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Butuan City Police Station 5 - Brgy. San Mateo',
    subcategory: [
      { id: 9, val: '09995065769' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Butuan City Mobile Force Company – 1st Platoon - J.C Aquino' ,
    subcategory: [{ id: 10, val: '09302970041' }],
  },
  {
    isExpanded: false,
    category_name: 'Butuan City Mobile Force Company – 2nd Platoon - Brgy. Bit-os',
    subcategory: [
      { id: 11, val: '09489298598' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Butuan City Mobile Force Company – 3rd Platoon - Brgy. Villa Kananga',
    subcategory: [
      { id: 12, val: '09104724325'},
    ],
  },
  {
    isExpanded: false,
    category_name: 'Butuan City Mobile Force Company – 4th Platoon - Brgy. Ampayon',
    subcategory: [{ id: 13, val: '09306339199' }],
  },
  {
    isExpanded: false,
    category_name: 'Butuan City Fire Station',
    subcategory: [{ id: 14, val: '09106670623' }],
  },
  {
    isExpanded: false,
    category_name: 'Butuan City Fire Station – Ampayon Sub-station',
    subcategory: [
      { id: 15, val: '09185097692' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Butuanc City - CDDRMC',
    subcategory: [
      { id: 16, val: '09217687287' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Philippine Coast Guard – Butuan City',
    subcategory: [
      { id: 17, val: '09173204942' },
    ],
  },
  {
    isExpanded: false,
    category_name: '402nd Infantry “Stingers Brigade, Philippine Army”',
    subcategory: [
      { id: 18, val: '09395088573' },
    ],
  },
];