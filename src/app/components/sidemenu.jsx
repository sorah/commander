"use strict";

var Menu = require('./menu');

module.exports = class Sidemenu extends React.Component {
  render() {
    return (
      <Menu level={0} items={this.props.items} active={this.props.active} onItemClick={this.handleItemClick.bind(this)}/>
    )
  }

  handleItemClick(ev) {
    this.props.onItemClick(ev);
  }
};
