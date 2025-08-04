import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

export default function MapScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [radius, setRadius] = useState(1000); // 1km default
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    getLocationPermission();
  }, []);

  const getLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Location permission is required to use this app');
      return;
    }

    const currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const adjustRadius = (increase: boolean) => {
    const newRadius = increase 
      ? Math.min(radius + 500, 10000) 
      : Math.max(radius - 500, 500);
    setRadius(newRadius);
  };

  if (!location) {
    return (
      <View style={styles.loading}>
        <Text>Getting your location...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        {isVisible && (
          <>
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="You"
              description="Your current location"
            />
            <Circle
              center={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              radius={radius}
              fillColor="rgba(37, 99, 235, 0.1)"
              strokeColor="rgba(37, 99, 235, 0.5)"
              strokeWidth={2}
            />
          </>
        )}
      </MapView>

      <View style={styles.controls}>
        <TouchableOpacity
          style={[styles.controlButton, !isVisible && styles.invisibleButton]}
          onPress={toggleVisibility}
        >
          <Ionicons 
            name={isVisible ? "eye" : "eye-off"} 
            size={24} 
            color={isVisible ? "#2563eb" : "#6b7280"} 
          />
        </TouchableOpacity>

        <View style={styles.radiusControls}>
          <TouchableOpacity
            style={styles.radiusButton}
            onPress={() => adjustRadius(false)}
          >
            <Ionicons name="remove" size={20} color="#2563eb" />
          </TouchableOpacity>
          <Text style={styles.radiusText}>{(radius / 1000).toFixed(1)}km</Text>
          <TouchableOpacity
            style={styles.radiusButton}
            onPress={() => adjustRadius(true)}
          >
            <Ionicons name="add" size={20} color="#2563eb" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1,
  },
  controls: {
    position: 'absolute',
    top: 60,
    right: 16,
    gap: 12,
  },
  controlButton: {
    backgroundColor: '#fff',
    borderRadius: 24,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  invisibleButton: {
    backgroundColor: '#f3f4f6',
  },
  radiusControls: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingHorizontal: 8,
    paddingVertical: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  radiusButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radiusText: {
    marginHorizontal: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#2563eb',
    minWidth: 40,
    textAlign: 'center',
  },
});