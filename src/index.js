import React, {PropTypes} from 'react';

export default class Infinity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      loading: false
    };
  }
  render() {
    const {disabled, loading} = this.state;
    const {offsetRatio, onNewData, onScroll, ...rest} = this.props;
    const enabled = !disabled && !loading; // not listening for onScroll event
                                           // if disabled or loading
    return (
      <div {...rest} onScroll={(e) => enabled && this.handleScroll(e, onScroll)}>
        {this.props.children}
      </div>
    );
  }
  handleScroll(e, onScroll) {
    const {offsetRatio, onNewData} = this.props;
    const {target} = e;
    const fullHeight = target.scrollHeight;
    const actualHeight = target.offsetHeight;
    const scrollTopPosition = target.scrollTop;
    const scrollBottomPosition = actualHeight + scrollTopPosition;

    // checking if the scroll position is in the zone where we need to trigger
    // new data load method
    if (fullHeight - actualHeight * offsetRatio <= scrollBottomPosition) {
      if (onNewData) {
        if (onNewData.length === 1) {
          // async method, wait till the callback is called; start loading
          this.setState({ loading: true });
          onNewData(this.newDataCallback.bind(this));
        } else {
          // sync; disable if returns `false`
          if (onNewData() === false) {
            this.setState({ disabled: true });
          }
        }
      }
    }

    if (onScroll) {
      onScroll(e);
    }
  }
  newDataCallback(shouldContinue) {
    // disabling scroll listener if `false` is passed as argument to the callback
    if (shouldContinue === false) {
      this.setState({ disabled: true });
    }
    this.setState({ loading: false });
  }
}

Infinity.defaultProps = {
  offsetRatio: .5
};

Infinity.propTypes = {
  offsetRatio: PropTypes.number.isRequired,
  onNewData: PropTypes.func.isRequired
};
