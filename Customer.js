// @flow

'use strict';

module.exports = class Customer {
  // member variables
  _customerNumber: number;
  _name: string;
  _streetAddress: string;
  _city: string;

  constructor(name: string, streetAddress: string, city: string) {
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
