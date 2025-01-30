import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from "react-native";
import { Card } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WalkTrackerScreen = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [timer, setTimer] = useState(0);
    const [walkHistory, setWalkHistory] = useState([]);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    // Load walk history from storage
    useEffect(() => {
        loadWalkHistory();
    }, []);

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    };

    const resetTimer = async () => {
        if (timer > 0) {
            const newWalk = {
                id: Date.now().toString(),
                duration: new Date(timer * 1000).toISOString().substr(11, 8),
                date: new Date().toLocaleString(),
            };
            const updatedHistory = [newWalk, ...walkHistory];
            setWalkHistory(updatedHistory);
            await AsyncStorage.setItem("walkHistory", JSON.stringify(updatedHistory));
        }
        setTimer(0);
        setIsRunning(false);
    };

    const loadWalkHistory = async () => {
        const savedHistory = await AsyncStorage.getItem("walkHistory");
        if (savedHistory) {
            setWalkHistory(JSON.parse(savedHistory));
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Walking Tracker</Text>
                <Text style={styles.placeholder}>Track your pet's walks here.</Text>
                <Card containerStyle={styles.card}>
                    <View style={styles.cardContent}>
                        {/* Large Image on the left */}
                        <Image 
                            source={require("../assets/images/walk-tracker.jpeg")}
                            style={styles.image}
                        />

                        {/* Timer & Button Section */}
                        <View style={styles.timerSection}>
                            <Text style={styles.timerText}>
                                {new Date(timer * 1000).toISOString().substr(11, 8)}
                            </Text>

                            <TouchableOpacity
                                style={styles.playButton}
                                onPress={toggleTimer}
                            >
                                <FontAwesome 
                                    name={isRunning ? "pause" : "play"}
                                    size={24}
                                    color="#fff"
                                />
                                <Text style={styles.buttonText}>
                                    {isRunning ? "Pause Walk" : "Start Walk"}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.resetButton}
                                onPress={resetTimer}
                            >
                                <FontAwesome name="undo" size={20} color="#fff" />
                                <Text style={styles.buttonText}>Reset Walk</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Card>

                {/* Walk History Section */}
                {walkHistory.length > 0 && (
                    <View style={styles.historySection}>
                        <Text style={styles.historyTitle}>Walk History</Text>
                        <FlatList
                            data={walkHistory}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={styles.historyItem}>
                                    <Text style={styles.historyText}>{item.date}</Text>
                                    <Text style={styles.historyText}>Duration: {item.duration}</Text>
                                </View>
                            )}
                        />
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8F5E9", // Light green for walking
    },
    content: {
        padding: 20,
        alignItems: "center",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#2E7D32",
        marginBottom: 15,
    },
    card: {
        borderRadius: 15,
        padding: 15,
        width: "100%",
        backgroundColor: "#F1F8E9", // Softer green background
        alignItems: "center",
    },
    cardContent: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },
    image: {
        width: "0%",  // Image now occupies the entire left side
        height: 180,
        borderRadius: 10,
    },
    timerSection: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 15,
    },
    timerText: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#2E7D32",
        marginBottom: 10,
    },
    playButton: {
        flexDirection: "row",
        backgroundColor: "#4CAF50",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginBottom: 10,
    },
    resetButton: {
        flexDirection: "row",
        backgroundColor: "#FF7043",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    buttonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        marginLeft: 10,
    },
    placeholder: {
        fontSize: 16,
        color: "#555",
        marginTop: 15,
        textAlign: "center",
    },
    historySection: {
        marginTop: 20,
        width: "100%",
    },
    historyTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#2E7D32",
        marginBottom: 10,
        textAlign: "center",
    },
    historyItem: {
        backgroundColor: "#C8E6C9",
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    historyText: {
        fontSize: 16,
        color: "#2E7D32",
    },
});

export default WalkTrackerScreen;


