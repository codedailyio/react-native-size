import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

const isFunc = fn => "function" === typeof fn;

class Sizer extends Component {
  static propTypes = {
    onLayout: PropTypes.func,
    onUpdate: PropTypes.func,
    responsive: PropTypes.bool,
  };
  static defaultProps = {
    responsive: true,
  }
  state = {
    measured: false,
    dimensions: {},
  };
  measureLayout = e => {
    const { layout } = e.nativeEvent;
    if (isFunc(this.props.onLayout)) this.props.onLayout(e);

    const prevState = this.state;

    if (prevState.measured && !this.props.responsive) return;

    this.setState(
      {
        measured: true,
        dimensions: { ...layout },
      },
      () => {
        if (isFunc(this.props.onUpdate)) {
          this.props.onUpdate(prevState, this.state);
        }
      },
    );
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
