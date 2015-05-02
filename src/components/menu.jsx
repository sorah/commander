"use strict";

module.exports = class Menu extends React.Component {
  render() {
    return (
      <ul className={this.rootClassName}>
        {this.renderedMenuItems}
      </ul>
    );
  }

  get renderedMenuItems() {
    return this.props.items.map((item) => {
      var className = "cm-menuitem";
      if (item.path.length == this.props.active.length && item.path.every((x,i) => x == this.props.active[i])) {
        className += " cm-menuitem-active";
      }

      return <li className={className} key={`menuitem//${item.path.join("/")}`}>
        <span>{item.name}</span>
        {item.isGroup() ? <Menu {...this.props} level={this.props.level + 1} items={item.children} /> : ''}
      </li>
    });
  }

  get rootClassName() {
    return `cm-menu cm-menu-lv-${this.props.level}`;
  }
};
