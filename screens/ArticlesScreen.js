import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, ScrollView, View, Image } from "react-native";
import { Icon } from "react-native-elements";

const ArticlesScreen = () => {

    const handleShare = (articleTitle) => {
        console.log(`Sharing article: ${articleTitle}`);
    };

    const handleBookmark = (articleTitle) => {
        console.log(`Bookmark article: ${articleTitle}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.header}>Articles</Text>

                {/* Article 1 */}
                <View style={styles.articleCard}>
                    <Image 
                        source={require("../assets/images/pet-training.jpeg")} // Add your image path here
                        style={styles.articleImage}
                    />
                    <View style={styles.articleContent}>
                        <Text style={styles.articleTitle}>
                            Training Tips for New Pet Owners
                        </Text>
                        <Text style={styles.articleText}>
                            Learn simple training techniques for beginners to take care of your furry friends.
                        </Text>
                        <View style={styles.iconsContainer}>
                            <TouchableOpacity onPress={() => handleShare("Training Tips for New Pet Owners")}>
                                <Icon name="share" size={24} color="#FFB07C" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleBookmark("Training Tips for New Pet Owners")}>
                                <Icon name="bookmark" size={24} color="#FFB07C" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Article 2 */}
                <View style={styles.articleCard}>
                    <Image 
                        source={require("../assets/images/pet-nutrition.jpeg")} // Add your image path here
                        style={styles.articleImage}
                    />
                    <View style={styles.articleContent}>
                        <Text style={styles.articleTitle}>
                            Pet Nutrition 101
                        </Text>
                        <Text style={styles.articleText}>
                            Essential tips on what to feed your pets to keep them healthy and happy.
                        </Text>
                        <View style={styles.iconsContainer}>
                            <TouchableOpacity onPress={() => handleShare("Pet Nutrition 101")}>
                                <Icon name="share" size={24} color="#FFB07C" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleBookmark("Pet Nutrition 101")}>
                                <Icon name="bookmark" size={24} color="#FFB07C" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Add more articles here */}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D3D3D3"
    },
    scrollContainer: {
        padding: 20
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },
    articleCard: {
        backgroundColor: "#20B2AA",
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
    articleImage: {
        width: 100, // Adjust the size as needed
        height: 100,
        borderRadius: 10,
        marginRight: 15, // Space between image and text
    },
    articleContent: {
        flex: 1, // Ensure text takes up the remaining space
    },
    articleTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF",
    },
    articleText: {
        fontSize: 14,
        marginTop: 10,
        color: "#FFF",
        fontWeight: "bold"
    },
    iconsContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 10,
    },
});

export default ArticlesScreen;

