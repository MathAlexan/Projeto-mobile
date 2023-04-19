import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInputComponent, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Digite seu nome:</Text>
      <TextInput style = {styles.inputText} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e87fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font:{
    fontSize : 20,
    fontWeight:"bold",
  },
  inputText:{
    padding: 5
  }
});
