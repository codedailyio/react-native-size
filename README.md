```js
import Sizer from "./sizer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
class SizeTheThing extends Component {
  render() {
    return (
      <Sizer style={styles.container}>
        {({ measured, x, y, width, height }) => {
          return (
            <View>
              <Text>{measured ? "Yep" : "Nope"}</Text>
              <Text>{width} x {height}</Text>
              <Text>x:{x}, y:{y}</Text>
            </View>
          );
        }}
      </Sizer>
    );
  }
}
```