import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Tarefa({ data, deleteItem }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={deleteItem}>
        <FontAwesome name="trash" size={20} color="#22272E" />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{data.item}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0", // Cor de fundo mais sólida
    marginTop: 12,
    padding: 12,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: "#333", // Cor de texto mais escura para maior contraste
    fontWeight: "500", // Texto um pouco mais forte
  },
  button: {
    marginRight: 8,
  },
});
