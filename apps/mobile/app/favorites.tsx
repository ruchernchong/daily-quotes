import { FlatList, StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Quote } from './components/Quote'
import { themes } from './constants/Themes'
import { useFavorites } from './hooks/useFavorites'

const FavoritesScreen = () => {
  const { favorites } = useFavorites()
  const colorScheme = useColorScheme()
  const theme = colorScheme || 'light'
  const styles = getStyles(theme)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Quotes</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.quote}
        renderItem={({ item }) => (
          <Quote quote={item.quote} author={item.author} theme={theme} />
        )}
      />
    </View>
  )
}

const getStyles = (theme: 'light' | 'dark') => {
  const currentTheme = themes[theme]
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentTheme.background,
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: currentTheme.text,
      marginBottom: 20,
      textAlign: 'center',
    },
  })
}

export default FavoritesScreen
