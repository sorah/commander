"use strict";

var MenuItem = require('./menu_item');
var Views = require('./views');

var items = [
  new MenuItem(
    'EC2',
    {
      children: [
        new MenuItem('Instances', {component: Views.EC2.Instances}),
        new MenuItem('ELBs', {component: null}),
      ],
    }
  ),
];

var assignPath = function(is, path) {
  is.forEach((item) => {
    item.path = [...path, item.name];
    if ( item.isGroup() )
      assignPath(item.children, item.path);
  });
}
assignPath(items, []);

module.exports = items;
