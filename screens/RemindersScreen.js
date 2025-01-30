import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { Card } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const RemindersScreen = () => {
    const navigation = useNavigation();
    const width = useWindowDimensions();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.reminderSection}>
                    {/* Walking Reminder */}
                    <Card containerStyle={[styles.card,styles.cardWalking]}>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>Walking Reminder</Text>
                            <Text style={styles.cardDescription}>
                                Don't forget to take your dog for a walk today!
                            </Text>
                            <TouchableOpacity
                                style={[styles.cardButton,styles.cardButtonWalking]}
                                onPress={() => navigation.navigate("WalkTrackerScreen")}
                            >
                                <Text style={styles.cardButtonText}>Track Walk</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>

                    {/* Health Tracker Reminder */}
                    <Card containerStyle={[styles.card,styles.cardHealth]}>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>Health Tracker</Text>
                            <Text style={styles.cardDescription}>
                                Keep an eye on your pet's health today. Make sure to check their vitals.
                            </Text>
                            <TouchableOpacity
                                style={[styles.cardButton,styles.cardButtonHealth]}
                                onPress={() => navigation.navigate("HealthTrackerScreen")}
                            >
                                <Text style={styles.cardButtonText}>Track Health</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>

                    {/* Weight Tracker Reminder */}
                    <Card containerStyle={[styles.card,styles.cardWeight]}>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>Weight Tracker</Text>
                            <Text style={styles.cardDescription}>
                                Time to update your pet's weight record. Track their progress.
                            </Text>
                            <TouchableOpacity
                                style={[styles.cardButton,styles.cardButtonWeight]}
                                onPress={() => navigation.navigate("WeightTrackerScreen")}
                            >
                                <Text style={styles.cardButtonText}>Track Weight</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>
                    {/* Vet Reminder */}
                    <Card containerStyle={[styles.card,styles.cardVet]}>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>Appointments</Text>
                            <Text style={styles.cardDescription}>
                                Add reminders so that you don't forget to take your furry friend to the vet!
                            </Text>
                            <TouchableOpacity
                                style={[styles.cardButton, styles.cardButtonVet]}
                                onPress={() => navigation.navigate("VetAppointmentsScreen")}
                            >
                                <Text style={styles.cardButtonText}>Add Reminder</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D3D3D3",
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    reminderSection: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    card: {
        borderRadius: 15,
        marginVertical: 10,
        backgroundColor: "#F5F5F5",
    },
    cardContent: {
        padding: 15,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    cardDescription: {
        fontSize: 14,
        color: "#777",
        marginVertical: 10,
    },
    cardButton: {
        backgroundColor: "#FFB07C", 
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: "center",
    },
    cardButtonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
    },
    cardButtonWalking: {
        backgroundColor: "#4CAF50", // Walking - Green
    },
    cardButtonHealth: {
        backgroundColor: "#2196F3", // Health - Blue
    },
    cardButtonWeight: {
        backgroundColor: "#FF9800", // Weight - Orange
    },
    cardButtonVet: {
        backgroundColor: "#E91E63", // Veterinary - Red/Pink
    },
    cardWalking: {
        backgroundColor: "#E8F5E9", // Walking - Light Green
    },
    cardHealth: {
        backgroundColor: "#E3F2FD", // Health - Light Blue
    },
    cardWeight: {
        backgroundColor: "#FFF3E0", // Weight - Light Orange
    },
    cardVet: {
        backgroundColor: "#FCE4EC", // Vet - Light Pink
    },
});

export default RemindersScreen;
