"use strict";

var Sidemenu = require('./components/sidemenu');
var AccountSwitcher = require('./components/account_switcher');
var MenuItems = require('./menu_items');

const DEFAULT_PAGE = ['EC2', 'Instances'];
module.exports = class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: DEFAULT_PAGE,
      activeAccount: null,
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div classname="col-sm-5">
            <AccountSwitcher active={this.state.activeAccount} />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-2">
            <Sidemenu items={MenuItems} active={this.state.activePath}/>
          </div>
          <div className="col-sm-10">
            Main Content
          </div>
        </div>
      </div>
    );
  }
};
