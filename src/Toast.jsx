import React from 'react';
import { Alert, Collapse } from 'react-bootstrap';

export default class Toast extends React.Component {
  // Timer automatically dismiss after five seconds
  componentDidUpdate() {
    const { showing, onDismiss } = this.props;
    if (showing) {
      clearTimeout(this.dismissTimer); // clear the timer when the component is being unmounted
      this.dismissTimer = setTimeout(onDismiss, 5000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.dismissTimer); // clear the timer before setting up a new one
  }

  render() {
    const {
      showing, bsStyle, onDismiss, children,
    } = this.props;
    return (
      <Collapse in={showing}>
        <div style={{
          position: 'fixed', bottom: 20, left: 20, zIndex: 10,
        }}
        >
          <Alert bsStyle={bsStyle} onDismiss={onDismiss}>
            {children}
          </Alert>
        </div>
      </Collapse>
    );
  }
}
