import React, { Component, PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

export default class About extends Component {
  render() {
    return (
      <Card>
        <CardHeader
          title="About" />
        <CardText>
          this site about
        </CardText>
      </Card>
    );
  }
}
