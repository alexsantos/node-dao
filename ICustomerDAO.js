// @flow

// Interface that all CustomerDAOs must support
interface ICustomerDAO {
  insertCustomer(): string;
  deleteCustomer(): boolean;
  findCustomer(): Object;
  updateCustomer(): boolean;
}
