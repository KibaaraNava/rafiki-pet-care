import { Icon, Avatar, Chip } from "react-native-elements";
import { TouchableOpacity, SafeAreaView, StyleSheet, ScrollView, Text, View, TextInput, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {

const navigation = useNavigation();
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>

                {/*Search bar */}
                <View style={styles.searchBarContainer}>
                    <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
                    <TextInput 
                        style={styles.searchInput}
                        placeholder="Search..."
                        placeholderTextColor={"#999"}
                    />
                </View>

                    {/*CTA card with Registration Button */}
                <View style={styles.regTextContainer}>
                    <Text style={styles.headingText}>Welcome to Rafiki Pet Care!</Text>
                    <Text style={styles.descriptionText}>
                        Creating a pet profile allows you to manage your pet's health records, track their milestones, and receive personalized care tips and reminders.
                    </Text>
                    <TouchableOpacity style={styles.profileButton}>
                        <Text style={styles.profileButtonText}>
                            Create Pet Profile
                        </Text>
                    </TouchableOpacity>
                </View>

                {/*View seperator */}
                <View style={styles.separatorProfiles}></View>

                {/*Pet profile section */}
                <View style={styles.profilesSection}>
                    <View style={styles.profilesHeader}>
                        <Chip 
                            title={"Your Profiles"}
                            containerStyle={styles.chipContainer}
                            buttonStyle={styles.chipButton}
                            titleStyle={styles.chipTitle}
                        />
                        <TouchableOpacity style={styles.servicesText}>
                            <Text style={styles.seeMoreText}>
                                View More
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.petAvatarsRow}>
                        <View style={styles.profilesRow}>
                            {/*Pet Profile Avatar */}
                            <TouchableOpacity style={styles.profileCard}>
                                <Avatar 
                                    size={"large"}
                                    source={require("../assets/images/user-profile-1.jpeg")}
                                    overlayContainerStyle={{backgroundColor: "#FFB07C"}}
                                    rounded
                                />
                                <Text style={styles.profileCardText}>
                                    Add a profile
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.profileCard}>
                                <Avatar 
                                    size={"large"}
                                    source={require("../assets/images/user-profile-2.jpeg")}
                                    overlayContainerStyle={{backgroundColor: "#FFB07C"}}
                                    rounded
                                />
                                <Text style={styles.profileCardText}>
                                    Add a profile
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                {/*Section area */}
                <View style={styles.sectionContainer}>
                    {/*Articles section */}
                    <View style={styles.articlesSection}>
                        <View style={styles.articlesHeader}>
                            <Chip 
                                title={"Articles"}
                                containerStyle={styles.chipContainer}
                                buttonStyle={styles.chipButton}
                                titleStyle={styles.chipTitle}
                            />
                            <TouchableOpacity
                                onPress={() => navigation.navigate("ArticlesScreen")}
                            >
                                <Text style={styles.seeMoreText}>View More</Text>
                            </TouchableOpacity>
                        </View>
                        {/*Articles card row */}
                        <View style={styles.cardsRow}>
                            <View style={styles.card}>
                                <Image 
                                    style={styles.cardImage}
                                    source={require("../assets/images/pet-nutrition.jpeg")}
                                />
                                <View style={styles.cardContent}>
                                    <Text style={styles.cardText}>Understanding Pet Nutrition</Text>
                                    <Text style={styles.cardDescription}>
                                        What nutrients does your pet need to thrive?
                                    </Text>
                                    <Text style={styles.cardLabel}>
                                        Last Updated: Jan 26, 2025
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.cardsRow}>
                            <View style={styles.card}>
                                <Image 
                                    style={styles.cardImage}
                                    source={require("../assets/images/pet-exercise.jpeg")}
                                />
                                <View style={styles.cardContent}>
                                    <Text style={styles.cardText}>Training Your Pet</Text>
                                    <Text style={styles.cardDescription}>
                                     Tips to build a positive routine for your pet.
                                    </Text>
                                    <Text style={styles.cardLabel}>
                                        Last Updated: Jan 26, 2025
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/*View seperator */}
                    <View style={styles.separator}></View>

                        {/*Reminders section */}
                    <View style={styles.servicesSection}>
                        <View style={styles.servicesHeader}>
                            <Chip 
                                title={"Reminders"}
                                containerStyle={styles.chipContainer}
                                buttonStyle={styles.chipButton}
                                titleStyle={styles.chipTitle}
                            />
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Reminders")}
                            >
                                <Text style={styles.seeMoreText}>View More</Text>
                            </TouchableOpacity>
                        </View>
                        {/*Services cards row */}
                        <View style={styles.cardsRow}>
                                <View style={styles.card}>
                                <Image 
                                    style={styles.cardImage}
                                    source={require("../assets/images/pet-training.jpeg")}
                                />
                                    <View style={styles.cardContent}>
                                        <Text style={styles.cardText}>Walk Tracker</Text>
                                        <Text style={styles.cardDescription}>
                                            Track your pet's vaccinations, vet visits, and milestones.
                                        </Text>
                                        <TouchableOpacity style={styles.cardButton}>
                                            <Text style={styles.buttonText}>Start</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                        </View>

                        <View style={styles.cardsRow}>
                                <View style={styles.card}>
                                <Image 
                                    style={styles.cardImage}
                                    source={require("../assets/images/pet-health.jpeg")}
                                />
                                        <View style={styles.cardContent}>
                                            <Text style={styles.cardText}>HealthCare Tracker</Text>
                                            <Text style={styles.cardDescription}>
                                                Easily book vet appointments and set health reminders.
                                            </Text>
                                            <TouchableOpacity style={styles.cardButton}>
                                                <Text style={styles.buttonText}>Create</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                        </View>

                        <View style={styles.cardsRow}>
                                <View style={styles.card}>
                                <Image 
                                    style={styles.cardImage}
                                    source={require("../assets/images/pet-weight.jpeg")}
                                />
                                    <View style={styles.cardContent}>
                                        <Text style={styles.cardText}>Weight Tracker</Text>
                                        <Text style={styles.cardDescription}>
                                            Track your pet's weight.
                                        </Text>
                                        <TouchableOpacity style={styles.cardButton}>
                                            <Text style={styles.buttonText}>Add</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                        </View>
                    </View>

                    {/*View seperator */}
                    <View style={styles.separator}></View>

                    {/*Exercises section */}
                    <View style={styles.coursesSection}>
                        <View style={styles.coursesHeader}>
                            <Chip 
                                title={"Exercises"}
                                containerStyle={styles.chipContainer}
                                buttonStyle={styles.chipButton}
                                titleStyle={styles.chipTitle}
                            />
                            <TouchableOpacity
                                onPress={() => navigation.navigate("ExercisesScreen")}
                            >
                                <Text style={styles.seeMoreText}>View More</Text>
                            </TouchableOpacity>
                        </View>

                        {/*Articles card row */}
                        <View style={styles.cardsRow}>
                            <View style={styles.card}>
                            <Image 
                                    style={styles.cardImage}
                                    source={require("../assets/images/pet-training.jpeg")}
                                />
                                <View style={styles.cardContent}>
                                    <Text style={styles.cardText}>Basic Exercise Routines</Text>
                                    <Text style={styles.cardDescription}>
                                    Discover simple and effective exercises for your pet to stay active and healthy. 
                                    </Text>
                                    <Text style={styles.cardLabel}>
                                        Last Updated: Jan 26, 2025
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.cardsRow}>
                            <View style={styles.card}>
                            <Image 
                                    style={styles.cardImage}
                                    source={require("../assets/images/pet-training.jpeg")}
                                />
                                <View style={styles.cardContent}>
                                    <Text style={styles.cardText}>Advanced Fitness Plans</Text>
                                    <Text style={styles.cardDescription}>
                                    Explore advanced exercise routines that focus on strength, endurance, and agility. 
                                    </Text>
                                    <Text style={styles.cardLabel}>
                                            Last Updated: Jan 26, 2025
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D3D3D3"
    },
    sectionContainer: {
        backgroundColor: "#20B2AA",
        marginTop: 30,
        paddingHorizontal: 20,
        borderRadius: 15,
        height: "100%",
        width: "100%"
    },
    scrollContainer: {
        paddingBottom: 20
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 60,
        paddingBottom: 20,
        backgroundColor: "#FFE4C4"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginLeft: 10
    },
    regTextContainer: {
        padding: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        borderColor: "#20B2AA",
        borderWidth: 2,
        marginLeft: 19,
        width: "90%",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 6,
    },
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        marginBottom: 10
    },
    descriptionText: {
        fontSize: 16,
        color: "#333",
        textAlign: "center",
        marginBottom: 20
    },
    profileButton: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "#20B2AA"
    },
    profileButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },
    registerCardText: {
        fontSize: 16,
        color: "#333",
        textAlign: "center",
        marginBottom: 20
    },
    registerButton: {
        backgroundColor: "#D3D3D3",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        alignItems: "center"
    },
    registerButtontext: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFB07C"
    },
    servicesSection: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    articlesSection: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    coursesSection: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    servicesHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    articlesHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    coursesHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    servicesText: {
        fontSize: 18,
        color: "#FFB07C",
        fontWeight: "bold" 
    },
    cardsRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
        gap: 10
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#D3D3D3",
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 3,
        width: "100%",
    },
    cardContent: {
        marginLeft: 15,
        flex: 1,
        flexDirection: "column"
    },
    cardText: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 15,
        color: "#333",
        marginBottom: 5
    },
    cardDescription: {
        fontSize: 14,
        color: "#666",
        marginVertical: 5,
        lineHeight:20,
        marginBottom: 5
    },
    cardButton: {
        backgroundColor: "#FFB07C",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    cardImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    separator: {
        height: 3,
        backgroundColor: "#ccc",
        marginVertical: 15,
        borderRadius: 25
    },
    separatorProfiles: {
        height: 1,
        marginVertical: 15,
        marginLeft: 19,
        borderRadius: 25,
        width: "91%",
        backgroundColor: "#20B2AA" 
    },
    searchBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF",
        padding: 5,
        borderRadius: 25,
        marginVertical: 60,
        width: "60%",
        marginHorizontal: 70,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3
    },
    searchIcon: {
        marginRight: 10
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: "#333"
    },
    profilesSection: {
        marginTop: 30,
        marginLeft: 19,
        paddingHorizontal: 20,
        width: "90%",
        justifyContent: "center",
        borderColor: "#20B2AA",
        borderWidth: 2,
        paddingVertical: 20,
        borderRadius: 15,
    },
    profilesHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    profileCard: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D3D3D3",
        padding: 2,
        borderRadius: 10,
        width: 120,
        marginHorizontal: 10,
        marginTop: 5
    },
    profileCardText: {
        fontSize: 14,
        color: "#333",
        textAlign: "center",
    },
    profilesRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    petAvatarsRow: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    chipContainer: {
        marginTop: 5,
        marginBottom: 10,
        alignSelf: "flex-start"
    },
    chipButton: {
        backgroundColor: "#FFE4C4",
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    chipTitle: {
        color: "#333",
        fontSize: 15,
        fontWeight: "bold"
    }
});

export default HomeScreen;