import { View, Text, StyleSheet } from "react-native"

const Subtitle = ({children}) => {
  return (
    <View style={ styles.subtitleContainer }>
        <Text style={ styles.subtitle }>{children}</Text>
      </View>
  )
}
const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    marginHorizontal: 4,
    marginVertical: 4,
    padding: 6,
    borderColor: '#e2b497',
    borderBottomWidth: 2,
  }
})
export default Subtitle