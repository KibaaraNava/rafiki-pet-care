import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, ScrollView, View, Image } from "react-native";
import { Icon } from "react-native-elements";

const CoursesScreen = () => {
    const handleShare = (courseTitle) => {
        console.log(`Sharing course: ${courseTitle}`);
    };

    const handleBookmark = (courseTitle) => {
        console.log(`Bookmark course: ${courseTitle}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.header}>Courses</Text>

                {/* Course 1 */}
                <View style={styles.courseCard}>
                    <Image 
                        source={require("../assets/images/pet-health.jpeg")} // Add your image path here
                        style={styles.courseImage}
                    />
                    <View style={styles.courseContent}>
                        <Text style={styles.courseTitle}>Pet Care 101</Text>
                        <Text style={styles.courseDescription}>
                            A beginner's course on essential pet care, including feeding, grooming, and health.
                        </Text>
                        <View style={styles.iconsContainer}>
                            <TouchableOpacity onPress={() => handleShare("Pet Care 101")}>
                                <Icon name="share" size={24} color="#FFB07C" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleBookmark("Pet Care 101")}>
                                <Icon name="bookmark" size={24} color="#FFB07C" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Course 2 */}
                <View style={styles.courseCard}>
                    <Image 
                        source={require("../assets/images/pet-exercise.jpeg")} // Add your image path here
                        style={styles.courseImage}
                    />
                    <View style={styles.courseContent}>
                        <Text style={styles.courseTitle}>Advanced Pet Training</Text>
                        <Text style={styles.courseDescription}>
                            Take your pet training skills to the next level with advanced techniques.
                        </Text>
                        <View style={styles.iconsContainer}>
                            <TouchableOpacity onPress={() => handleShare("Advanced Pet Training")}>
                                <Icon name="share" size={24} color="#FFB07C" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleBookmark("Advanced Pet Training")}>
                                <Icon name="bookmark" size={24} color="#FFB07C" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Add more courses here */}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D3D3D3",  // Same background color as in ArticlesScreen
    },
    scrollContainer: {
        padding: 20
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    courseCard: {
        backgroundColor: "#20B2AA", // Same background color as in ArticlesScreen
        flexDirection: "row", // Align image and text horizontally
        padding: 15,
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 3,
    },
    courseImage: {
        width: 100, // Adjust the size as needed
        height: 100,
        borderRadius: 10,
        marginRight: 15, // Space between image and text
    },
    courseContent: {
        flex: 1, // Ensure text takes up the remaining space
    },
    courseTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff", // White text color for title
    },
    courseDescription: {
        fontSize: 14,
        marginTop: 10,
        color: "#FFF",  // White text color for description
        fontWeight: "bold",
    },
    iconsContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 10,
    },
});

export default CoursesScreen;


