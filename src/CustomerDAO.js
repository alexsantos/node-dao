// @flow

// Interface that all CustomerDAOs must support
interface ICustomerDAO {
  insertCustomer(): string;
  deleteCustomer(): boolean;
  findCustomer(): ? Object;
  updateCustomer(): boolean;
}

module.exports = class CustomerDAO {

  insertCustomer(): number {
    return 0;
  }

  deleteCustomer(): boolean {
    return true;
  }

  findCustomer(): ? Object {
    return null;
  }

  updateCustomer(): boolean {
    return true;
  }
}
