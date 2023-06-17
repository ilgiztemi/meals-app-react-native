import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={ CategoriesScreen } />
      <Drawer.Screen name="Favorites" component={ FavoritesScreen } />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={ { headerStyle: { backgroundColor: "#351401" }, headerTintColor: "white", contentStyle: { backgroundColor: "#351401" } } }>
          <Stack.Screen name="Drawer" options={ { headerShown: false } } component={ DrawerNavigator } />
          <Stack.Screen name="MealsOverview" component={ MealsOverviewScreen }
          />
          <Stack.Screen name="MealDetail" component={ MealDetailScreen } />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
} );
