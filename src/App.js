import React from 'react';
import {SafeAreaView, Text, StatusBar, StyleSheet} from 'react-native';
import MinMax from './components/MinMax';

const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.Container}>
        <Text>Cadu Castanha</Text>
        <MinMax x={1} y={10} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
