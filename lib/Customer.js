

'use strict';

module.exports = class Customer {
  // member variables


  constructor(name, streetAddress, city) {
    this._customerNumber = 0;
    this._name = name;
    this._streetAddress = streetAddress;
    this._city = city;
  }

  getCustomerNumber() {
    return this._customerNumber;
  }

  getName() {
    return this._name;
  }
};