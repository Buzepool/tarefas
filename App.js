import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Tarefa from "./src/Tarefa";

export default function App() {
  const [tarefa, setTarefa] = useState("");
  const [list, setList] = useState([]);

  function handleAdd() {
    if (tarefa === "") {
      return;
    }
    const dados = {
      key: Date.now().toString(),
      item: tarefa,
    };
    setList((oldArray) => [dados, ...oldArray]);
    setTarefa("");
  }

  function handleDelete(item) {
    let filtroItem = list.filter((tarefa) => {
      return tarefa.item !== item;
    });

    setList(filtroItem);
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Tarefas</Text>
      <View style={style.containerInput}>
        <TextInput
          placeholder="Digite uma tarefa"
          style={style.input}
          value={tarefa}
          onChangeText={(text) => setTarefa(text)}
        />
        <TouchableOpacity style={style.buttonAdd} onPress={handleAdd}>
          <FontAwesome name="plus" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={list}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Tarefa data={item} deleteItem={() => handleDelete(item.item)} />
        )}
        style={style.list}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22272E",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginTop: "5%",
    paddingStart: "5%",
    marginBottom: 12,
  },
  input: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 5,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  buttonAdd: {
    backgroundColor: "#34CB79",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  list: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingStart: "4%",
    paddingEnd: "4%",
  },
});
