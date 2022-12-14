import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealItem from "../components/MealItem";
import { CATEGORIES } from "../data/dummy-data";
import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ( { route, navigation } ) => {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter( mealItem => {
    return mealItem.categoryIds.indexOf( catId ) >= 0;
  } );
  useLayoutEffect( () => {
    const categoryTitle = CATEGORIES.find( el => el.id === catId ).title;
    navigation.setOptions( {
      title: categoryTitle
    } );
  }, [ catId, navigation ] );
  const renderMealItem = ( itemData ) => {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      duration: item.duration,
      complexity: item.complexity
    };
    return (
      <MealItem { ...mealItemProps } />
    );
  };
  return (
    <View style={ styles.container }>
      <FlatList data={ displayedMeals } keyExtractor={ item => item.id } renderItem={ renderMealItem } />
    </View>
  );
};
const styles = StyleSheet.create( {
  container: {
    flex: 1,
    padding: 16,
  }
} );
export default MealsOverviewScreen;