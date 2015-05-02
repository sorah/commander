"use strict";

module.exports = class MenuItem {
  constructor(name, opts) {
    this.name = name;
    this.children = opts.children
    this.component = opts.component
    this.style = opts.style
    this.path = [];
  }

  isGroup() {
    return this.children && this.children.length > 0;
  }
};
