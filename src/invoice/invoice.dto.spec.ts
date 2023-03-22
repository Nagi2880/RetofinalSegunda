import { Invoice } from './invoice.dto';

describe('Invoice', () => {
  it('should be defined', () => {
    expect(new Invoice()).toBeDefined();
  });
});
