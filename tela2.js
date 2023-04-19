import React, { useState } from "react";
import {FlatList, ScrollView, StatusBar, StyleSheet, Button, Text, View,TouchableOpacity, Alert,
} from "react-native";

const App = () => {
  const [produtos, setProdutos] = useState([
    {
      nome: 'Mesa 1',
      key: 1,
      descriçao:
        'Mesa disponível na quinta-feira às 15:00 com capacidade de 4 pessoas',
    },
    {
      nome: 'Mesa 2',
      key: 2,
      descriçao:
        'Mesa disponível na sexta-feira às 18:00 com capacidade de 6 pessoas',
    },
    {
      nome: 'Mesa 3',
      key: 3,
      descriçao:
        'Mesa disponível no domingo às 12:00 com capacidade de 4 pessoas',
    },
    {
      nome: 'Mesa 4',
      key: 4,
      descriçao:
        'Mesa disponível na segunda-feira às 16:00 com capacidade de 2 pessoas',
    },
    {
      nome: 'Mesa 5',
      key: 5,
      descriçao:
        'Mesa disponível na terça-feira às 20:00 com capacidade de 6 pessoas',
    },
    {
      nome: 'Mesa 6',
      key: 6,
      descriçao:
        'Mesa disponível na quarta-feira às 14:00 com capacidade de 8 pessoas',
    },
    {
      nome: 'Mesa 7',
      key: 7,
      descriçao:
        'Mesa disponível na quinta-feira às 17:00 com capacidade de 4 pessoas',
    },
    {
      nome: 'Mesa 8',
      key: 8,
      descriçao:
        'Mesa disponível na sexta-feira às 19:00 com capacidade de 6 pessoas',
    },
    {
      nome: 'Mesa 9',
      key: 9,
      descriçao:
        'Mesa disponível no sábado às 18:00 com capacidade de 8 pessoas',
    },
    {
      nome: 'Mesa 10',
      key: 10,
      descriçao:
        'Mesa disponível no domingo às 13:00 com capacidade de 4 pessoas',
    },
  ]);

  const apertarBotao = (item) => {
  console.log(item.descriçao);
  Alert.alert(
    item.nome,
    item.descriçao,
    [
      { text: "Reservar", onPress: () => console.log("Botão Reservar pressionado") },
      { text: "Cancelar", onPress: () => console.log("Botão Cancelar pressionado") }
    ]
  );
};

  return (
    <View style={styles.container}>

         <View style={styles.boxtitulo}>
          <Text style={styles.title}>Reserva de Mesas</Text>
         </View>
          <FlatList
            numColumns={2}
            keyExtractor={(item) => item.nome}
            data={produtos}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => apertarBotao(item)}>
                <Text style={styles.item}>{item.nome}</Text>
              </TouchableOpacity>
            )}
          />
        
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
   flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    marginTop: 20,
  },

  item: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF69B4",
    marginTop: 40,
    marginHorizontal:20,
    alignContent: "center",
    width: 160,
    height: 110,
    padding: 20,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
  },
  
  boxtitulo: {
    marginTop: 40,
  },

  title: {
    marginTop: 2,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    color: "#8B008B",
    textShadowRadius: 1,
    textShadowOffset: { width: 2, height: 2 },
  },
});
export default App;
