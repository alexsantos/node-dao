// @flow

'use strict';

const Costumer = require('./Customer');

// Interface that all CustomerDAOs must support
interface ICustomerDAO {
  insertCustomer(x: number): number;
  deleteCustomer(): boolean;
  findCustomer(): ?Object;
  updateCustomer(): boolean;
}



const CloudscapeCustomerDAO = class CloudscapeCustomerDAO {
  constructor() {
    // initialization
    console.log('CloudscapeCustomerDAO initialized');
  }

  // The following methods can use
  // CloudscapeDAOFactory.createConnection()
  // to get a connection as required

  insertCustomer(): number {
    // Implement insert customer here.
    // Return newly created customer number
    // or a -1 on error
    let customer = new Costumer('1', 'Sesame Street', 'LA');
    return customer.getCustomerNumber();
  }

  deleteCustomer(): boolean {
    // Implement delete customer here
    // Return true on success, false on failure
    return true;
  }

  findCustomer(): ?Object {
    // Implement find a customer here using supplied
    // argument values as search criteria
    // Return a Transfer Object if found,
    // return null on error or if not found
    return null;
  }

  updateCustomer(): boolean {
    // implement update record here using data
    // from the customerData Transfer Object
    // Return true on success, false on failure or
    // error
    return true;
  }

};

module.exports = CloudscapeCustomerDAO;
