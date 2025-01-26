import { Icon, Chip, Avatar } from "react-native-elements";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ExploreScreen = () => {

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>

                {/*Explore */}
                <View style={styles.exploreSection}>

                    {/*Articles */}
                    <View style={styles.listItem}>
                        <Text style={styles.exploreText}>
                            Articles
                        </Text>
                        <TouchableOpacity style={styles.arrowButton}>
                            <Icon name="arrow-forward" size={24} color={"#FFB07C"} />
                        </TouchableOpacity>
                    </View>

                    {/*View seperator */}
                    <View style={styles.separator}></View>

                    {/*Courses */}
                    <View style={styles.listItem}>
                        <Text style={styles.exploreText}>
                            Courses
                        </Text>
                        <TouchableOpacity style={styles.arrowButton}>
                            <Icon name="arrow-forward" size={24} color={"#FFB07C"} />
                        </TouchableOpacity>
                    </View>

                    {/*View seperator */}
                    <View style={styles.separator}></View>

                    {/*Exercises */}
                    <View style={styles.listItem}>
                        <Text style={styles.exploreText}>
                            Exercises
                        </Text>
                        <TouchableOpacity style={styles.arrowButton}>
                            <Icon name="arrow-forward" size={24} color={"#FFB07C"} />
                        </TouchableOpacity>
                    </View>

                    {/*View seperator */}
                    <View style={styles.separator}></View>

                    {/*Games */}
                    <View style={styles.listItem}>
                        <Text style={styles.exploreText}>
                            Games
                        </Text>
                        <TouchableOpacity style={styles.arrowButton}>
                            <Icon name="arrow-forward" size={24} color={"#FFB07C"} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/*Explore More Section */}
                <View style={styles.exploreMore}>

                    {/*Articles */}
                    <Chip 
                        title={"Articles"}
                        containerStyle={styles.chipContainer}
                        buttonStyle={styles.chipButton}
                        titleStyle={styles.chipTitle}
                    />
                    <View style={styles.card}>
                        <Avatar 
                            rounded
                            size={"large"}
                            source={require("../assets/images/pet-dog.jpeg")}
                        />
                        <View style={styles.cardContent}>
                            <Text style={styles.cardText}>
                                Training Tips For New Pet Owners
                            </Text>
                            <Text style={styles.cardDescription}>
                                Learn how to take care of your furry friends with simple training techniques for beginners.
                            </Text>
                            <TouchableOpacity style={styles.arrowButtonExplore}>
                                <Icon name="arrow-forward" size={24} color={"#FFB07C"} />
                                <Text style={styles.arrowText}>Swipe To See More Articles</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/*View seperator */}
                    <View style={styles.separator}></View>

                    {/*Courses */}
                    <Chip 
                        title={"Courses"}
                        containerStyle={styles.chipContainer}
                        buttonStyle={styles.chipButton}
                        titleStyle={styles.chipTitle}
                    />
                    <View style={styles.card}>
                        <Avatar 
                            rounded
                            size={"large"}
                            source={require("../assets/images/pet-cat.jpeg")}
                        />
                        <View style={styles.cardContent}>
                            <Text style={styles.cardText}>
                                Essential Pet Care Courses
                            </Text>
                            <Text style={styles.cardDescription}>
                                Sign up for comprehensive courses that teach you about pet nutrition, health, and training.
                            </Text>
                            <TouchableOpacity style={styles.arrowButtonExplore}>
                                <Icon name="arrow-forward" size={24} color={"#FFB07C"} />
                                <Text style={styles.arrowText}>Swipe To See More Articles</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                     {/*View seperator */}
                     <View style={styles.separator}></View>

                    {/*Exercises */}
                    <Chip 
                        title={"Exercises"}
                        containerStyle={styles.chipContainer}
                        buttonStyle={styles.chipButton}
                        titleStyle={styles.chipTitle}
                    />
                    <View style={styles.card}>
                        <Avatar 
                            rounded
                            size={"large"}
                            source={require("../assets/images/pet-exercise.jpeg")}
                        />
                        <View style={styles.cardContent}>
                            <Text style={styles.cardText}>
                                Daily Exercise Routines for Pets
                            </Text>
                            <Text style={styles.cardDescription}>
                                Discover fun and engaging exercise routines to keep your pets healthy and active.
                            </Text>
                            <TouchableOpacity style={styles.arrowButtonExplore}>
                                <Icon name="arrow-forward" size={24} color={"#FFB07C"} />
                                <Text style={styles.arrowText}>Swipe To See More Articles</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                     {/*View seperator */}
                     <View style={styles.separator}></View>

                    {/*Games */}
                    <Chip 
                        title={"Games"}
                        containerStyle={styles.chipContainer}
                        buttonStyle={styles.chipButton}
                        titleStyle={styles.chipTitle}
                    />
                    <View style={styles.card}>
                        <Avatar 
                            rounded
                            size={"large"}
                            source={require("../assets/images/pet-games.jpeg")}
                        />
                        <View style={styles.cardContent}>
                            <Text style={styles.cardText}>
                                Interactive Games for Your Pets
                            </Text>
                            <Text style={styles.cardDescription}>
                                Find exciting games to entertain and bond with your pets.
                            </Text>
                            <TouchableOpacity style={styles.arrowButtonExplore}>
                                <Icon name="arrow-forward" size={24} color={"#FFB07C"} />
                                <Text style={styles.arrowText}>Swipe To See More Articles</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D3D3D3"
    },
    scrollContainer: {
        paddingBottom: 20
    },
    exploreSection: {
        marginTop: 30,
        paddingHorizontal: 20
    },
    exploreMore: {
        marginTop: 30,
        paddingHorizontal: 20,
        backgroundColor: "#20B2AA",
        height: "100%",
        borderRadius: 25
    },
    exploreText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15
    },
    separator: {
        height: 3,
        backgroundColor: "#ccc",
        marginVertical: 15,
        borderRadius: 25
    },
    arrowButton: {
        padding: 5
    },
    arrowButtonExplore: {
        padding: 1,
        alignSelf: "flex-start"
    },
    arrowText: {
        color: "#333",
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5
    },
    chipContainer: {
        marginTop: 30,
        marginBottom: 10,
        alignSelf: "flex-start"
    },
    chipButton: {
        backgroundColor: "#FFE4C4",
        paddingHorizontal: 40,
        paddingVertical: 15
    },
    chipTitle: {
        color: "#333",
        fontSize: 15,
        fontWeight: "bold"
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#D3D3D3",
        padding: 25,
        marginVertical: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 3,
    },
    cardContent: {
        flex: 1,
        flexDirection: "column",
        marginLeft: 5
    },
    cardText: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 5,
        color: "#333",
        marginBottom: 10
    },
    cardDescription: {
        fontSize: 14,
        color: "#666",
        marginVertical: 5,
        lineHeight:20
    }
});

export default ExploreScreen;