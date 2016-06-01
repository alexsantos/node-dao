
'use strict';

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

const Customer = require('./Customer');
const DAOFactory = require('./DAOFactory');
const CloudscapeDAOFactory = require('./CloudscapeDAOFactory');
const CloudscapeCustomerDAO = require('./CloudscapeCustomerDAO');

const DATABASE = DAOFactory.CLOUDSCAPE;

console.log('Teste: ' + DATABASE);
// create the required DAO Factory
const cloudscapeFactory = // new CloudscapeDAOFactory();
DAOFactory.getDAOFactory(DATABASE);
console.log(typeof cloudscapeFactory);
console.log(cloudscapeFactory);
console.log(cloudscapeFactory instanceof CloudscapeDAOFactory);

// console.log('Customer');
// const customer = new Customer('1', 'Sesame Street', 'LA');
// //  DAOFactory.getDAOFactory(DATABASE);
// console.log(typeof customer);
// console.log(customer);

console.log('CustomerDAO');
// // Create a DAO
const custDAO = cloudscapeFactory.getCustomerDAO();
console.log(typeof custDAO);
console.log(custDAO instanceof CloudscapeCustomerDAO);
console.log(custDAO);

// create a new customer
let newCustNo = custDAO.insertCustomer();

console.log(newCustNo);