"use strict";

var Sidemenu = require('./components/sidemenu');
var AccountSwitcher = require('./components/account_switcher');

var MenuItems, MenuItemsByPath;
(function() {
  var itemsExp = require('./menu_items');
  MenuItems = itemsExp['MenuItems'];
  MenuItemsByPath = itemsExp['MenuItemsByPath'];
})();


const DEFAULT_PAGE = ['EC2', 'Instances'].join('/');
module.exports = class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: DEFAULT_PAGE,
      activeAccount: null,
    }
  }

  get activeMenuItem() {
    return MenuItemsByPath[this.state.activePath];
  }

  get activeItemElement() {
    console.log(this.state.activePath);
    var item = this.activeMenuItem;
    if ( ! item )
      return null;

    var component = item.component;
    if ( ! component )
      return null;

    return React.createElement(component, {key: `view-${item.path}`});
  }

  handleSidemenuItemClick(ev) {
    if ( ev.target.dataset.itemPath ) {
      this.setState({activePath: ev.target.dataset.itemPath});
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-5">
            <AccountSwitcher active={this.state.activeAccount} />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-2">
            <Sidemenu items={MenuItems} active={this.state.activePath} onItemClick={this.handleSidemenuItemClick.bind(this)}/>
          </div>
          <div className="col-sm-10">
            {this.activeItemElement}
          </div>
        </div>
      </div>
    );
  }
};
