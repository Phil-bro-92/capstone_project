import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import Icon from "react-native-vector-icons/MaterialIcons";

const ListContainer = ({ munros }) => {
  const tableHead = ["Name", "Height", "Completed"];
  const [filteredMunros, setFilteredMunros] = useState([]);

console.log(filterMunros);
  const filterMunros = (input) => {
    const filteredNodes = munros.filter((munro) => {
      return munro.name.toLowerCase().includes(input.toLowerCase());
    });
    setFilteredMunros(filteredNodes);
    if (input === "") {
      setFilteredMunros([]);
    }
  };

  const handleFilterMunros = (text) => {
    filterMunros(text);
  };

  let res;
  if (filteredMunros.length > 0) {
    res = filteredMunros;
  } else {
    res = munros;
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.ScrollView}>
        <TextInput
          style={styles.textInput}
          placeholder="Search Munros:"
          onChangeText={handleFilterMunros}
        ></TextInput>
        <Table
          borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}
          style={styles.table}
        >
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />

          {
            (munroItems = res.map((munro, index) => {
              let climbedIcon;
              if (munro.climbed) {
                climbedIcon = <Icon name="landscape" size={24} color="green" />;
              } else {
                climbedIcon = <Icon name="landscape" size={24} color="grey" />;
              }
              return (
                <Row
                  key={index}
                  data={[munro.name, munro.height + "m", climbedIcon]}
                  heightArr={[28, 28]}
                />
              );
            }))
          }
        </Table>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30},
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
  scrollView: { marginHorizontal: 20},
  textInput: {
    margin: "8%",
  },
  table: { backgroundColor: 'rgba(250, 250, 250, 0.3)'
  },


});
export default ListContainer;
