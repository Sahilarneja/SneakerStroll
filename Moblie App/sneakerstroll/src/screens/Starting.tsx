import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type StartingProps = NativeStackScreenProps<RootStackParamList, "Starting">;

const Starting = ({ navigation }: StartingProps) => {
  useEffect(() => {
    const delay = 3000; // 3 seconds
    const timeout = setTimeout(() => {
      // Use 'Introone' as specified in your RootStackParamList
      navigation.replace('Introone');
    }, delay);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeout);

  }, [navigation]); 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sneaker Stroll</Text>
    </View>
  );
};

export default Starting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B61500',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Acme',
    fontStyle: 'italic',
  },
});
