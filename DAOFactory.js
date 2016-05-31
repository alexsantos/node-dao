/* @flow */
'use strict';

const CloudscapeDAOFactory = require('./CloudscapeDAOFactory');
const OracleDAOFactory = require('./CloudscapeDAOFactory');
const SybaseDAOFactory = require('./CloudscapeDAOFactory');

class DAOFactory {

  static get CLOUDSCAPE(): number {
    return 1;
  }

  static get ORACLE(): number {
    return 2;
  }

  static get SYBASE(): number {
    return 3;
  }

  static getDAOFactory(whichFactory: number) { // : CloudscapeDAOFactory|OracleDAOFactory|SybaseDAOFactory|null {
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
}

module.exports = DAOFactory;
