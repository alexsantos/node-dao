
'use strict';

const CloudscapeDAOFactory = require('./CloudscapeDAOFactory');
const OracleDAOFactory = require('./CloudscapeDAOFactory');
const SybaseDAOFactory = require('./CloudscapeDAOFactory');

module.exports = class DAOFactory {

  static get CLOUDSCAPE() {
    return 1;
  }

  static get ORACLE() {
    return 2;
  }

  static get SYBASE() {
    return 3;
  }

  static get MONGO() {
    return 4;
  }

  static getDAOFactory(whichFactory) {
    // : CloudscapeDAOFactory|OracleDAOFactory|SybaseDAOFactory|null {
    switch (whichFactory) {
      case 1:
        return new CloudscapeDAOFactory();
      case 2:
        return new OracleDAOFactory();
      case 3:
        return new SybaseDAOFactory();
      default:
        return {};
    }
  }
};