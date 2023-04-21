import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";

const App = () => {
  const onPressAcessar = () => {
    // Ao clicar em Acessar faz algo
    Alert.alert('Acesso liberado!' `${nome},${cpf}`)
  };
  const onPressEsqueceuASenha = () => {
    // Ao clicar em Esqueceu a senha faz algo
  };
  const onPressCadastrar = () => {
    // faz algo ao clicar para se cadastrar
  };
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  return (
    <View style={styles.container}>

      <View style={styles.box1}>
        <Text style={styles.titulo}>Kalima's Restaurant</Text>
      </View>

      <View style={styles.inputView}>
        <Ionicons name="person" size={24} color="black" />
        <TextInput
          style={styles.inputText}
          placeholder=" Nome Completo"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setNome(text)} />
      </View>

      <View style={styles.inputView}>
        <AntDesign name="idcard" size={24} color="black" />
        <TextInput
          style={styles.inputText}
          placeholder=" CPF"
          placeholderTextColor="#003f5c"
          maxLength={11}
          keyboardType="numeric"
          onChangeText={(text) => setCpf(text)}
        />

      </View>

      <TouchableOpacity onPress={onPressEsqueceuASenha}>
        <Text style={styles.forgotAndSignUpText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressAcessar} style={styles.loginButton}>
        <Text style={styles.loginText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressCadastrar}>
        <Text style={styles.forgotAndSignUpText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    backgroundColor: "#FF1493",
    alignItems: "center",
    justifyContent: "center",
  },

  box1: {
    marginBottom: 30,
  },

  titulo: {
    fontWeight: "bold",
    color: "#8B008B",
    textShadowColor: "black",
    fontSize: 40,
    textShadowRadius: 1,
    textShadowOffset: { width: 2, height: 2 },
  },

  inputView: {
    fontWeight: "bold",
    backgroundColor: "white",
    borderColor: "black",
    alignItems: "center",
    flexDirection: "row",
    width: 350,
    height: 75,
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
  },

  inputText: {
    height: 50,
    color: "black",
  },

  loginText: {
    fontWeight: "bold",
    flexDirection: "row",
    color: 'black',
    fontSize: 16,
  },

  forgotAndSignUpText: {
    color: 'black',
    fontSize: 14,
  },

  loginButton: {
    backgroundColor: '#DDA0DD',
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 50,
    marginTop: 40,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
});
export default App;
