// @flow

'use strict';

const CloudscapeCustomerDAO = require('./CloudscapeCustomerDAO');
const CloudscapeAccountDAO = require('./CloudscapeAccountDAO');
const CloudscapeOrderDAO = require('./CloudscapeOrderDAO');

module.exports = class CloudscapeDAOFactory {
  constructor() {
    console.log('Instanciado');
  }
  static get DRIVER() {
    return 'COM.cloudscape.core.RmiJdbcDriver';
  }
  static get DBURL() {
    return 'jdbc:cloudscape:rmi://localhost:1099/CoreJ2EEDB';
  }

  // method to create Cloudscape connections
  static createConnection() {
    // Use DRIVER and DBURL to create a connection
    // Recommend connection pool implementation/usage
  }
  getCustomerDAO() {
    // CloudscapeCustomerDAO implements CustomerDAO
    return new CloudscapeCustomerDAO();
  }
  getAccountDAO() {
    // CloudscapeAccountDAO implements AccountDAO
    return new CloudscapeAccountDAO();
  }
  getOrderDAO() {
    // CloudscapeOrderDAO implements OrderDAO
    return new CloudscapeOrderDAO();
  }
};
