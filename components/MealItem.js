import { View, Text, Image, Pressable, StyleSheet, Platform } from 'react-native';

const MealItem = ( { title, imageUrl, duration, complexity, affordability } ) => {
  return (
    <View style={ styles.mealItem }>
      <Pressable android_ripple={ { color: "#ccc" } }
        style={ ( { pressed } ) => pressed ? styles.buttonPressed : null }>
        <View style={ styles.innerContainer }>
          <View>
            <Image style={ styles.imageStyle } source={ { uri: imageUrl } } />
            <Text style={ styles.title }>{ title }</Text>
          </View>
          <View style={ styles.details }>
            <Text style={ styles.detailItem }>{ duration }</Text>
            <Text style={ styles.detailItem }>{ complexity }</Text>
            <Text style={ styles.detailItem }>{ affordability }</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create( {
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageStyle: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  }
} );
export default MealItem;