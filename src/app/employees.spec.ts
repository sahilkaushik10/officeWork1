import { Employees } from './employees';


describe('Employees', () => {
  it('should create an instance', () => {
    const employees = new Employees(
      'Sahil',
      'Casual Leave',
      '2023-06-01',
      '2023-06-02',
      'AWS',
      'Manager 1'
    );
    expect(employees).toBeTruthy();
  });
});