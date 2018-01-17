import React, { Component } from "react";
import { View } from "react-native";

class Sizer extends Component {
  state = {
    measured: false,
    dimensions: {},
  };
  measureLayout = e => {
    const { layout } = e.nativeEvent;
    this.setState({
      measured: true,
      dimensions: { ...layout },
    });
  };
  render() {
    return (
      <View {...this.props} onLayout={this.measureLayout}>
        {this.props.children({
          measured: this.state.measured,
          ...this.state.dimensions,
        })}
      </View>
    );
  }
}

export default Sizer;
