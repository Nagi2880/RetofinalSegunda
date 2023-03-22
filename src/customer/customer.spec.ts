import { Customer } from './customer.dto';

describe('Customer', () => {
  it('should be defined', () => {
    expect(new Customer()).toBeDefined();
  });
});
