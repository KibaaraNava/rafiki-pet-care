import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Card } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

const WeightTrackerScreen = () => {
    const [weight, setWeight] = useState("");
    const [history, setHistory] = useState([]);

    const saveWeight = () => {
        if (weight) {
            setHistory([...history, { id: Date.now().toString(), weight }]);
            setWeight("");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Weight Tracker</Text>
                <Text style={styles.placeholder}>Log your pet's weight over time.</Text>

                <Card containerStyle={styles.card}>
                    <View style={styles.cardContent}>
                        <Image 
                            source={require("../assets/images/pet-weight.jpeg")}
                            style={styles.image}
                        />
                        <View style={styles.inputSection}>
                            <Text style={styles.label}>Enter Weight (kg):</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                value={weight}
                                onChangeText={setWeight}
                                placeholder="e.g. 12.5"
                                placeholderTextColor="#8D6E63"
                            />
                            <TouchableOpacity style={styles.saveButton} onPress={saveWeight}>
                                <FontAwesome name="save" size={20} color="#fff" />
                                <Text style={styles.saveButtonText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Card>

                {/* Weight History */}
                <Text style={styles.historyTitle}>Weight History</Text>
                <FlatList
                    data={history}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.historyItem}>
                            <Text style={styles.historyText}>{item.weight} kg</Text>
                        </View>
                    )}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF3E0", // Light orange for weight tracking
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#E65100",
    },
    placeholder: {
        fontSize: 16,
        color: "#5D4037",
        marginTop: 10,
    },
    card: {
        borderRadius: 15,
        backgroundColor: "#FFCCBC", // Soft orange for weight tracking
    },
    cardContent: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginRight: 15,
    },
    inputSection: {
        flex: 1,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#6D4C41",
    },
    input: {
        borderWidth: 1,
        borderColor: "#6D4C41",
        borderRadius: 10,
        padding: 10,
        marginTop: 5,
        color: "#3E2723",
    },
    saveButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#E65100",
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    saveButtonText: {
        color: "#fff",
        fontWeight: "bold",
        marginLeft: 5,
    },
    historyTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 20,
        color: "#E65100",
    },
    historyItem: {
        backgroundColor: "#FFAB91",
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    historyText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#6D4C41",
    },
});

export default WeightTrackerScreen;

