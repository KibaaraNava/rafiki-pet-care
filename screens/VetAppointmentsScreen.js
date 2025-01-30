import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from "react-native";
import { Card } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

const VetAppointmentsScreen = () => {
    const [appointment, setAppointment] = useState("");
    const [appointments, setAppointments] = useState([]);

    const saveAppointment = () => {
        if (appointment) {
            const newAppointment = {
                id: Date.now().toString(),
                appointment: appointment,
                timestamp: new Date().toLocaleString(),
            };
            setAppointments([...appointments, newAppointment]);
            setAppointment("");
        }
    };

    const clearAppointments = () => {
        setAppointments([]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Vet Appointments</Text>
                <Text style={styles.placeholder}>Log your pet's vet appointments here.</Text>

                <Card containerStyle={styles.card}>
                    <View style={styles.cardContent}>
                        <Text style={styles.label}>Enter Appointment Details:</Text>
                        <TextInput
                            style={styles.input}
                            value={appointment}
                            onChangeText={setAppointment}
                            placeholder="e.g. Annual checkup"
                            placeholderTextColor="#8D6E63"
                        />
                        <TouchableOpacity style={styles.saveButton} onPress={saveAppointment}>
                            <FontAwesome name="save" size={20} color="#fff" />
                            <Text style={styles.saveButtonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </Card>

                {/* Appointment History */}
                <View style={styles.historySection}>
                    <Text style={styles.historyTitle}>Appointment History</Text>
                    {appointments.length > 0 ? (
                        <>
                            <FlatList
                                data={appointments}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => (
                                    <View style={styles.historyItem}>
                                        <Text style={styles.historyText}>{item.appointment}</Text>
                                        <Text style={styles.timestamp}>{item.timestamp}</Text>
                                    </View>
                                )}
                            />
                            <TouchableOpacity style={styles.clearButton} onPress={clearAppointments}>
                                <Text style={styles.clearButtonText}>Clear History</Text>
                            </TouchableOpacity>
                        </>
                    ) : (
                        <Text style={styles.noHistoryText}>No appointments recorded yet.</Text>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFCCBC", // Same background color as card for consistency
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
        backgroundColor: "#FFAB91", // Same soft orange color as the appointment card
    },
    cardContent: {
        padding: 15,
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
    historySection: {
        marginTop: 20,
    },
    historyTitle: {
        fontSize: 18,
        fontWeight: "bold",
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
    timestamp: {
        fontSize: 12,
        color: "#5D4037",
        marginTop: 5,
    },
    noHistoryText: {
        fontSize: 14,
        color: "#5D4037",
        marginTop: 10,
    },
    clearButton: {
        backgroundColor: "#BF360C",
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        alignItems: "center",
    },
    clearButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});

export default VetAppointmentsScreen;




