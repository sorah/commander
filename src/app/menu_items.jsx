"use strict";

var MenuItem = require('./menu_item');
var Views = require('./views');

var itemsByPath = {};
var items = [
  new MenuItem(
    'EC2',
    {
      children: [
        new MenuItem('Instances', {component: Views.EC2.Instances}),
        new MenuItem('ELBs', {component: Views.EC2.Elb}),
      ],
    }
  ),
];

var assignPath = function(is, path) {
  is.forEach((item) => {
    var newRawPath = [...path, item.name];
    item.path = newRawPath.join('/');
    itemsByPath[item.path] = item;
    if ( item.isGroup() )
      assignPath(item.children, newRawPath);
  });
}
assignPath(items, []);

module.exports = {
  MenuItems: items,
  MenuItemsByPath: itemsByPath,
}
