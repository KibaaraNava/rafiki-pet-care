import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import LandingPage from "./LandingScreen";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";
import PetProfileScreen from "./PetProfileScreen";
import LoginScreen from "./LoginScreen";
import ArticlesScreen from "./ArticlesScreen";
import CoursesScreen from "./CoursesScreen";
import ExercisesScreen from "./ExercisesScreen";
import GamesScreen from "./GamesScreen";
import RemindersScreen from "./RemindersScreen";
import WalkTrackerScreen from "./WalkTrackerScreen";
import HealthTrackerScreen from "./HealthTrackerScreen";
import WeightTrackerScreen from "./WeightTrackerScreen";
import VetAppointmentsScreen from "./VetAppointmentsScreen";


{/*Bottom Navigator variable*/}
const Tab = createBottomTabNavigator();

{/*Stack Navigator */}
const Stack = createStackNavigator();

{/*screeOptions variable*/}
const screenOptions= {
    tabBarActiveTintColor: "#FFB07C",
    tabBarInactiveTintColor: "#888"
};

const LandingStack = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen 
            name="LandingPage"
            component={LandingPage}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen 
            name="LoginScreen"
            component={LoginScreen}
            options={{
                title: "Login",
                headerStyle: {backgroundColor: "#FFB07C"},
                headerTintColor: "#FFF",
                headerTitleStyle: {fontWeight: "bold"}
            }}
        />
        <Stack.Screen 
            name="ExploreScreen"
            component={ExploreScreen}
            options={{
                title: "Login",
                headerStyle: {backgroundColor: "#FFB07C"},
                headerTintColor: "#FFF",
                headerTitleStyle: {fontWeight: "bold"}
            }}
        />
        <Stack.Screen 
            name="ArticlesScreen"
            component={ArticlesScreen}
            options={{
                title: "Articles",
                headerStyle: {backgroundColor: "#FFB07C"},
                headerTintColor: "#FFF",
                headerTitleStyle: {fontWeight: "bold"}
            }}
        />
        <Stack.Screen 
            name="CoursesScreen"
            component={CoursesScreen}
            options={{
                title: "Courses",
                headerStyle: {backgroundColor: "#FFB07C"},
                headerTintColor: "#FFF",
                headerTitleStyle: {fontWeight: "bold"}
            }}
        />
        <Stack.Screen 
            name="ExercisesScreen"
            component={ExercisesScreen}
            options={{
                title: "Exercises",
                headerStyle: {backgroundColor: "#FFB07C"},
                headerTintColor: "#FFF",
                headerTitleStyle: {fontWeight: "bold"}
            }}
        />
        <Stack.Screen 
            name="GamesScreen"
            component={GamesScreen}
            options={{
                title: "Games",
                headerStyle: {backgroundColor: "#FFB07C"},
                headerTintColor: "#FFF",
                headerTitleStyle: {fontWeight: "bold"}
            }}
        />
    </Stack.Navigator>
    );
};

const ExploreStack = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen 
            name="ExploreScreen"
            component={ExploreScreen}
            options={{
                title: "Explore",
                headerStyle: {backgroundColor: "#FFB07C"},
                headerTintColor: "#FFF",
                headerTitleStyle: {fontWeight: "bold"}
            }}
        />
        <Stack.Screen 
            name="ArticlesScreen"
            component={ArticlesScreen}
            options={{
                title: "Articles",
                headerStyle: {backgroundColor: "#FFB07C"},
                headerTintColor: "#FFF",
                headerTitleStyle: {fontWeight: "bold"}
            }}
        />
        <Stack.Screen 
            name="CoursesScreen"
            component={CoursesScreen}
            options={{
                title: "Courses",
                headerStyle: {backgroundColor: "#FFB07C"},
                headerTintColor: "#FFF",
                headerTitleStyle: {fontWeight: "bold"}
            }}
        />
        <Stack.Screen 
            name="ExercisesScreen"
            component={ExercisesScreen}
            options={{
                title: "Exercises",
                headerStyle: {backgroundColor: "#FFB07C"},
                headerTintColor: "#FFF",
                headerTitleStyle: {fontWeight: "bold"}
            }}
        />
        <Stack.Screen 
            name="GamesScreen"
            component={GamesScreen}
            options={{
                title: "Games",
                headerStyle: {backgroundColor: "#FFB07C"},
                headerTintColor: "#FFF",
                headerTitleStyle: {fontWeight: "bold"}
            }}
        />
    </Stack.Navigator>
    );
};

const ReminderStack = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen 
            name="ReminderScreen"
            component={RemindersScreen}
            options={{
                title: "Reminders",
                headerStyle: {backgroundColor: "#FFB07C"},
                headerTintColor: "#FFF",
                headerTitleStyle: {fontWeight: "bold"}
            }}
        />
        <Stack.Screen 
            name="WalkTrackerScreen"
            component={WalkTrackerScreen}
            options={{
                title: "Walk Tracker",
                headerStyle: {backgroundColor: "#FFB07C"},
                headerTintColor: "#FFF",
                headerTitleStyle: {fontWeight: "bold"}
            }}
        />
        <Stack.Screen 
            name="HealthTrackerScreen"
            component={HealthTrackerScreen}
            options={{
                title: "Health Tracker",
                headerStyle: {backgroundColor: "#FFB07C"},
                headerTintColor: "#FFF",
                headerTitleStyle: {fontWeight: "bold"}
            }}
        />
        <Stack.Screen 
            name="WeightTrackerScreen"
            component={WeightTrackerScreen}
            options={{
                title: "Weight Tracker",
                headerStyle: {backgroundColor: "#FFB07C"},
                headerTintColor: "#FFF",
                headerTitleStyle: {fontWeight: "bold"}
            }}
        />
        <Stack.Screen 
            name="VetAppointmentsScreen"
            component={VetAppointmentsScreen}
            options={{
                title: "Add Appointment",
                headerStyle: {backgroundColor: "#FFB07C"},
                headerTintColor: "#FFF",
                headerTitleStyle: {fontWeight: "bold"}
            }}
        />
    </Stack.Navigator>
    );
};

const MainComponent = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={screenOptions}
            >
                <Tab.Screen 
                    name= "Welcome"
                    component={LandingStack}
                    options={{
                        tabBarIcon: ({  color, size}) => {
                            return <Icon name="emoji-people" size={size} color={color} />
                        },
                        headerShown: false,
                        
                    }}
                />
                <Tab.Screen 
                    name= "Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({  color, size}) => {
                            return <Icon name="home" size={size} color={color} />
                        },
                        headerShown:false
                    }}
                />
                <Tab.Screen 
                    name= "Reminders"
                    component={ReminderStack}
                    options={{
                        tabBarIcon: ({ color, size}) => {
                        return <Icon name="pets" type="material" size={size} color={color} />
                        },
                        headerShown: false
                    }}
                />
                <Tab.Screen 
                    name= "Explore"
                    component={ExploreStack}
                    options={{
                        tabBarIcon: ({ color, size}) => {
                        return <Icon name="explore" size={size} color={color} />
                        },
                        headerShown: false
                    }}
                />
                <Tab.Screen 
                    name= "Profile"
                    component={PetProfileScreen}
                    options={{
                        tabBarIcon: ({ color, size}) => {
                        return <Icon name="cruelty-free" type="material" size={size} color={color} />
                        },
                        headerShown: false
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MainComponent;