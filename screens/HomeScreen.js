import { Icon } from "react-native-elements";
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="home" size={40} color="#FFB07C" />
                <Text style={styles.title}>Home</Text>
            </View>

            {/*CTA card with Registration Button */}
            <View style={styles.registerCard}>
                <Icon name="account-circle" size={60} color="#FFF" />
                <Text style={styles.registerCardText}>
                    Sign up to manage your pet's health and schedule easily with Rafiki Pet Care!
                </Text>
                <TouchableOpacity style={styles.registerButton}>
                    <Text style={styles.registerButtontext}>
                        Register Now
                    </Text>
                </TouchableOpacity>
            </View>

            {/*Services section */}
            <View style={styles.servicesSection}>
                <View style={styles.servicesHeader}>
                    <Text style={styles.servicesText}>Services</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeMoreText}>See More</Text>
                    </TouchableOpacity>
                </View>
            {/*Services cards row */}
                <View style={styles.cardsRow}>
                        <View style={styles.card}>
                            <Icon name="pets" size={40} color="#FFb07C" />
                            <Text style={styles.cardText}>Pet Profile Management</Text>
                        </View>
                        <View style={styles.card}>
                                <Icon name="healing" size={40} color="#FFb07C" />
                                <Text style={styles.cardText}>Pet HealthCare and Checkup</Text>
                        </View>
                </View>
                <View style={styles.cardsRow}>
                        <View style={styles.card}>
                            <Icon name="fitness-center" size={40} color="#FFb07C" />
                            <Text style={styles.cardText}>Pet Diet And Exercise</Text>
                        </View>
                        <View style={styles.card}>
                            <Icon name="lightbulb" size={40} color="#FFb07C" />
                            <Text style={styles.cardText}>Pet Care Tips</Text>
                        </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF5EE"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#FFE4C4"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginLeft: 10
    },
    registerCard: {
        backgroundColor: "#FFb07C",
        padding: 15,
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5
    },
    registerCardText: {
        fontSize: 16,
        color: "#FFF",
        textAlign: "center",
        marginBottom: 20
    },
    registerButton: {
        backgroundColor: "#FFF",
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
        paddingHorizontal: 20
    },
    servicesHeader: {
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
        justifyContent: "space-between",
        flexWrap: "wrap"
    },
    card: {
        backgroundColor: "#FFE4C4",
        width: "45%",
        paddingVertical: 25,
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        elevation: 3
    },
    cardText: {
        fontSize: 14,
        color: "#333",
        textAlign: "center"
    }
});

export default HomeScreen;