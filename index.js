// @flow
'use strict';

const Costumer = require('./Customer');

// Interface that all CustomerDAOs must support
// interface ICustomerDAO {
//   x: number;
//   insertCustomer(): string;
//   deleteCustomer(): boolean;
//   findCustomer(): Object;
//   updateCustomer(): boolean;
//   selectCustomersRS(): Object;
//   // selectCustomersTO(): Customer;
// }

const DAOFactory = require('./DAOFactory');

type Database = 1 | 2 | 3;

console.log('Teste: ' + (DAOFactory.CLOUDSCAPE: Database));
// create the required DAO Factory
const cloudscapeFactory =
  DAOFactory.getDAOFactory(DAOFactory.CLOUDSCAPE);
console.log(typeof cloudscapeFactory);

// Create a DAO
let custDAO =
  cloudscapeFactory.getCustomerDAO();
console.log(typeof custDAO);

// create a new customer
let newCustNo = custDAO.insertCustomer();

console.log(newCustNo);
