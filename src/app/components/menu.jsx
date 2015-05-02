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
      if (item.path == this.props.active) {
        className += " cm-menuitem-active";
      }

      var clickHandler = item.component ? this.props.onItemClick : null;

      return <li className={className} key={`menuitem//${item.path}`}>
        <div className="cm-menuitem-text" onClick={clickHandler} data-item-path={item.path}>{item.name}</div>
        {item.isGroup() ? <Menu {...this.props} level={this.props.level + 1} items={item.children} /> : ''}
      </li>
    });
  }

  get rootClassName() {
    return `cm-menu cm-menu-lv-${this.props.level}`;
  }
};
