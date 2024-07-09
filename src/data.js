export const vendors = [
    { number: 1, name: 'Acme Corp', location: 'New York' },
    { number: 2, name: 'Beta Industries', location: 'Los Angeles' },
    { number: 3, name: 'Gamma Supplies', location: 'Chicago' },
    { number: 4, name: 'Delta Services', location: 'Houston' },
    { number: 5, name: 'Epsilon Enterprises', location: 'Phoenix' },
    { number: 6, name: 'Zeta Tech', location: 'Philadelphia' },
    { number: 7, name: 'Eta Solutions', location: 'San Antonio' },
    { number: 8, name: 'Theta Logistics', location: 'San Diego' },
    { number: 9, name: 'Iota Innovations', location: 'Dallas' },
    { number: 10, name: 'Kappa Holdings', location: 'San Jose' },
  ];
  
  export const customers = [
    { number: 1, name: 'Alpha LLC', vendor: 'Acme Corp', location: 'New York' },
    { number: 2, name: 'Beta Corp', vendor: 'Beta Industries', location: 'Los Angeles' },
    { number: 3, name: 'Gamma LLC', vendor: 'Gamma Supplies', location: 'Chicago' },
    { number: 4, name: 'Delta Inc', vendor: 'Delta Services', location: 'Houston' },
    { number: 5, name: 'Epsilon LLC', vendor: 'Epsilon Enterprises', location: 'Phoenix' },
    { number: 6, name: 'Zeta Corp', vendor: 'Zeta Tech', location: 'Philadelphia' },
    { number: 7, name: 'Eta LLC', vendor: 'Eta Solutions', location: 'San Antonio' },
    { number: 8, name: 'Theta Inc', vendor: 'Theta Logistics', location: 'San Diego' },
    { number: 9, name: 'Iota LLC', vendor: 'Iota Innovations', location: 'Dallas' },
    { number: 10, name: 'Kappa Inc', vendor: 'Kappa Holdings', location: 'San Jose' },
  ];
  
  export const contacts = [
    { number: 1, name: 'John Doe', vendor: 'Acme Corp' },
    { number: 2, name: 'Jane Smith', vendor: 'Beta Industries' },
    { number: 3, name: 'Jim Brown', vendor: 'Gamma Supplies' },
    { number: 4, name: 'Jake White', vendor: 'Delta Services' },
    { number: 5, name: 'Jill Green', vendor: 'Epsilon Enterprises' },
    { number: 6, name: 'Joe Black', vendor: 'Zeta Tech' },
    { number: 7, name: 'Jen Blue', vendor: 'Eta Solutions' },
    { number: 8, name: 'Jack Red', vendor: 'Theta Logistics' },
    { number: 9, name: 'Jerry Pink', vendor: 'Iota Innovations' },
    { number: 10, name: 'Janet Purple', vendor: 'Kappa Holdings' },
  ];
  
  export const getVendorById = (id) => {
    const vendor = vendors.find(v => v.number === parseInt(id));
    if (!vendor) return null;
    return {
      ...vendor,
      founded: Math.floor(Math.random() * (2023 - 1900 + 1)) + 1900,
      industry: ['Technology', 'Manufacturing', 'Healthcare', 'Finance', 'Retail'][Math.floor(Math.random() * 5)],
      revenue: `$${Math.floor(Math.random() * 1000)}M`,
      employees: Math.floor(Math.random() * 10000),
    };
  };
  
  export const getCustomerById = (id) => {
    const customer = customers.find(c => c.number === parseInt(id));
    if (!customer) return null;
    return {
      ...customer,
      contactPerson: ['John Doe', 'Jane Smith', 'Jim Brown', 'Jake White', 'Jill Green'][Math.floor(Math.random() * 5)],
      email: `${customer.name.toLowerCase().split(' ').join('')}@example.com`,
      phone: '(123) 456-7890',
      orderVolume: `${Math.floor(Math.random() * 10000)} units/year`,
      customerSince: Math.floor(Math.random() * (2023 - 2000 + 1)) + 2000,
    };
  };
  
  export const getContactById = (id) => {
    const contact = contacts.find(c => c.number === parseInt(id));
    if (!contact) return null;
    return {
      ...contact,
      position: ['Manager', 'Director', 'VP', 'Sales Representative', 'Account Executive'][Math.floor(Math.random() * 5)],
      email: `${contact.name.toLowerCase().split(' ').join('')}@example.com`,
      phone: '(123) 456-7890',
      officeLocation: ['Headquarters', 'Branch Office', 'Remote'][Math.floor(Math.random() * 3)],
      yearsWithCompany: Math.floor(Math.random() * 30) + 1,
      linkedIn: `https://www.linkedin.com/in/${contact.name.toLowerCase().split(' ').join('')}`,
    };
  };
  