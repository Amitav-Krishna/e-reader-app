import React from 'react';
import { View, StyleSheet } from 'react-native';
import Pdf from 'react-native-pdf';

const PdfReader = ({ uri }) => (
  <View style={styles.container}>
    <Pdf
      source={{ uri }}
      onError={(error) => console.log(error)}
      style={styles.pdf}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  pdf: { flex: 1, width: '100%' },
});

export default PdfReader;

