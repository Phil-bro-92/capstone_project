import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Marker } from "react-native-maps";
import NavBar from "../components/NavBar";
import {View} from 'react-native'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMountain, faMountainCity } from "@fortawesome/free-solid-svg-icons";

const MapContainer = ({ munros }) => {

  return (
    <View>
    <NavBar />
    <MapView
      style={styles.map}
      mapType={"terrain"}
      provider={PROVIDER_GOOGLE}
      loadingEnabled={true}
      scrollEnabled={true}
      initialRegion={{
        latitude: 57.09538900176176,
        longitude: -4.77555789014292,
        latitudeDelta: 4,
        longitudeDelta: 4.8,
      }}
      
    >
      {munros.map((munro, index) => (
        <Marker
          key={index}
          coordinate={{ latitude: munro.latitude, longitude: munro.longitude }}
          title={munro.name}
          description={munro.height + "m"}
        >
          <FontAwesomeIcon icon={faMountain} size={15} color={'rgba(0,0,0,0.8)'}/>
        </Marker>
      ))}
    </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapContainer;
