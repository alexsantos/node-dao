/* @flow */
'use strict';

const CloudscapeDAOFactory = require('./CloudscapeDAOFactory');
const OracleDAOFactory = require('./CloudscapeDAOFactory');
const SybaseDAOFactory = require('./CloudscapeDAOFactory');

type DatabaseT = 1 | 2 | 3 | 4;

module.exports = class DAOFactory {

  static get CLOUDSCAPE(): 1 {
    return 1;
  }

  static get ORACLE(): 2 {
    return 2;
  }

  static get SYBASE(): 3 {
    return 3;
  }

  static get MONGO(): 4 {
    return 4;
  }

  static getDAOFactory(whichFactory: DatabaseT) { // : CloudscapeDAOFactory|OracleDAOFactory|SybaseDAOFactory|null {
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
