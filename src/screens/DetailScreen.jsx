import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function DetailScreen({ route }) {
  const { nasoneId } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nasone Detail</Text>
      <Text style={styles.subtitle}>ID: {nasoneId || 'N/A'}</Text>
      <Text style={styles.info}>
        Detail screen for individual nasone information will be implemented here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  info: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
  },
});
