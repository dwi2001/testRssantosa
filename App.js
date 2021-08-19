
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



const DataPasien = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>
          Test 5.b
        </Text>
        <View style={styles.bodyTable}>
          <View style={styles.Table}>
            <View style={styles.mainText}>
              <Text style={{ ...styles.text, fontWeight: 'bold' }}>
                Data Pasien
              </Text>
            </View>
            <Text style={styles.text}></Text>
          </View>

        </View>
      </View>
    </ScrollView>
  )
}

export default DataPasien;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  bodyTable: {
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
  },

  Table: {
    flex: 1,
  },
  text: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
  },
  mainText: {
    backgroundColor: '#f1f8ff',
    height: 30,
    flex: 1
  },

});

