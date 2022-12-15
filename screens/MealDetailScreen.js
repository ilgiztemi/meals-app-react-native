import { Text, Image, View, StyleSheet, ScrollView } from "react-native";
import List from "../components/MealDetail/LIst";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ( { route } ) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find( el => el.id === mealId );
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={ styles.image } source={ { uri: selectedMeal.imageUrl } } />
      <Text style={ styles.title }>{ selectedMeal.title }</Text>
      <MealDetails duration={ selectedMeal.duration } complexity={ selectedMeal.complexity } affordability={ selectedMeal.affordability } textStyle={ styles.textDetail } />
      <View style={styles.listOuterContainer}>
      <View style={ styles.listContainer }>
        <Subtitle>Ingredients</Subtitle>
        <List data={ selectedMeal.ingredients } />
        <Subtitle>Steps</Subtitle>
        <List data={ selectedMeal.steps } />
      </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create( {
  rootContainer: {
    marginBottom: 34,
  },  
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: 'white'
  },
  textDetail: {
    color: 'white'
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    maxWidth: '80%',
  },
} );

export default MealDetailScreen;