import React from 'react';
import {Pagination} from 'react-bootstrap';

const PaginationAdvanced = React.createClass({
  getInitialState() {
    return {
      activePage: 1
    };
  },

  handleSelect(eventKey) {
    console.log(eventKey);
    this.setState({
      activePage: eventKey
        });
  },

  render() {
    return (
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={20}
        maxButtons={5}
        activePage={this.state.activePage}
        onSelect={this.handleSelect} />
    );
  }
});
export default PaginationAdvanced;