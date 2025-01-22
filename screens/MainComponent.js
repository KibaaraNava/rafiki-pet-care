import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import LandingPage from "./LandingPage";

{/*Bottom Navigator variable*/}
const Tab = createBottomTabNavigator();

{/*screeOptions variable*/}
const screenOptions= {
    tabBarActiveTintColor: "#FFB07C",
    tabBarInactiveTintColor: "#888"
}

const MainComponent = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={screenOptions}
            >
                <Tab.Screen 
                    name= "Home"
                    component={LandingPage}
                    options={{
                        tabBarIcon: ({  color, size}) => {
                            <Icon name="Home" size={size} color={color} />
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MainComponent;