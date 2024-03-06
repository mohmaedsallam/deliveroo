import { Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Categories from "../Components/Categories";
import { SafeAreaView } from "react-native-safe-area-context";
import Restaurants from "../Components/Restaurants";
import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <Categories />
        <Text style={styles.header}>Top picks in your neighborhood</Text>
        <Restaurants />
        <Text style={styles.header}>Offers near you</Text>
        <Restaurants />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 50,
    backgroundColor: Colors.lightGrey,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});

export default Page;
