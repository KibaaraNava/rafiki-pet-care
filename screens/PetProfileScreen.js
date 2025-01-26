import { Avatar,Icon, Chip } from "react-native-elements";
import {  View, Text, StyleSheet, SafeAreaView } from "react-native";


const PetProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}> 
            <View>
                <Chip 
                    title={"Profile"}
                    containerStyle={styles.chipContainer}
                    buttonStyle={styles.chipButton}
                    titleStyle={styles.chipTitle}
                />
            </View>

            {/* */}
            <View style={styles.petAvatar}>
                <Avatar 
                    rounded
                    size={"xlarge"}
                    source={require("../assets/images/pet-avatar-icon.jpeg")}
                >
                    <Avatar.Accessory 
                        size={30}
                        style={styles.accessoryIcon}
                        iconStyle={{color: "#FFE4C4"}}
                    />
                </Avatar>
            </View>
            <View style={styles.petProfileTextContainer}>
                <Text style={styles.petProfileDescription}>
                    Your Pet
                </Text>
            </View>

            {/*View seperator */}
            <View style={styles.separatorProfiles}></View>

            {/*User profile section */}
            <View style={styles.userprofileSection}>
                <View style={styles.avatarWrapper}>
                    <View style={styles.avatarContainer}>
                        <View style={styles.uniqueProfileContainer}>
                            <Avatar 
                            rounded
                            size={"medium"}
                            source={require("../assets/images/user-profile-2.jpeg")}
                        />
                        </View>
                    </View>
                    <Text style={styles.avatarLabel}>
                            Your Profile
                    </Text>
                </View>
                
                <View style={styles.avatarWrapper}>
                    <View style={styles.avatarContainer}>
                        <Avatar 
                            rounded
                            size={"medium"}
                            icon={{name: "person-add", type: "material", color: "#2C2C2C"}}
                        />
                    </View>
                    <Text style={styles.avatarLabel}>
                            Add Profile
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
};

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D3D3D3"
    },
    chipContainer: {
        marginTop: 50,
        marginLeft: 20,
        marginBottom: 10,
        width: 150,

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
    },
    petAvatar: {
        justifyContent: "center",
        alignItems: "center"   
    },
    accessoryIcon: {
        backgroundColor: "#FFB07C",
        borderRadius: 15,
    },
    petProfileTextContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    petProfileDescription: {
        fontSize: 20,
        fontWeight: "bold"
    },
    separatorProfiles: {
        height: 1,
        marginVertical: 15,
        marginLeft: 19,
        borderRadius: 25,
        width: "91%",
        backgroundColor: "#20B2AA" 
    },
    userprofileSection: {
        flexDirection: "row"
    },
    avatarWrapper: {
        alignItems: "center",
        marginHorizontal: 10
    },
    avatarContainer: {
        borderWidth: 3,
        borderColor: "#20B2AA",
        borderRadius: 50,
        
        marginLeft: 5,
        
    },
    avatarLabel: {
        marginTop: 20,
        fontSize: 14,
        color: "#2C2C2C",
        fontWeight: "500",
        textAlign: "center",
    },
})

export default PetProfileScreen;