```js
import Sizer from "./sizer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
class SizeTheThing extends Component {
  onUpdate = (prevMeasure, updatedMeasure) => {
    // Do stuff like animations
  }
  render() {
    return (
      <Sizer style={styles.container} onUpdate={this.onUpdate}>
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

You can continue to use `onLayout` if necessary and it will receive the original event.


Additionally you can provide an `onUpdate` function that is called after the measurement has taken place and a re-render has ocurred. It receives the previous measurement, as well as the new measurement. This is a great spot to trigger animations.

The `responsive` prop defaults to `true`. When true if the container size changes the component will re-render. Set `responsive={false}` to disable and only measure the first time.