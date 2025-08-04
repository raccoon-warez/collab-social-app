import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

interface WebMapViewProps {
  style?: any;
  initialRegion?: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  showsUserLocation?: boolean;
  showsMyLocationButton?: boolean;
  children?: React.ReactNode;
}

export default function WebMapView({ 
  style, 
  initialRegion, 
  children 
}: WebMapViewProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.mapPlaceholder}>
        <Text style={styles.placeholderText}>🗺️</Text>
        <Text style={styles.title}>Interactive Map</Text>
        <Text style={styles.subtitle}>
          Location services are available on mobile devices
        </Text>
        {initialRegion && (
          <Text style={styles.coordinates}>
            📍 {initialRegion.latitude.toFixed(4)}, {initialRegion.longitude.toFixed(4)}
          </Text>
        )}
        <View style={styles.webInstructions}>
          <Text style={styles.instructionTitle}>Try the mobile app for:</Text>
          <Text style={styles.instruction}>• Real-time location tracking</Text>
          <Text style={styles.instruction}>• Interactive map with nearby users</Text>
          <Text style={styles.instruction}>• Activity discovery in your area</Text>
          <Text style={styles.instruction}>• GPS-based collaborative features</Text>
        </View>
      </View>
      {children}
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    margin: 16,
    padding: 32,
    borderWidth: 2,
    borderColor: '#e2e8f0',
    borderStyle: 'dashed',
  },
  placeholderText: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  coordinates: {
    fontSize: 14,
    color: '#2563eb',
    fontWeight: '600',
    marginBottom: 24,
  },
  webInstructions: {
    alignItems: 'flex-start',
  },
  instructionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 12,
  },
  instruction: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 6,
  },
});