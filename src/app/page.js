"use client";

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { updateVendor } from '../redux/vendorsSlice';
import { updateCustomer } from '../redux/customersSlice';
import { updateContact } from '../redux/contactsSlice';
import SearchBar from '../components/SearchBar';
import EditableTable from '../components/EditableTable';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const vendors = useSelector(state => state.vendors);
  const customers = useSelector(state => state.customers);
  const contacts = useSelector(state => state.contacts);

  const [vendorResults, setVendorResults] = useState(vendors);
  const [customerResults, setCustomerResults] = useState(customers);
  const [contactResults, setContactResults] = useState(contacts);

  const vendorColumns = [
    { Header: 'Number', accessor: 'number' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Location', accessor: 'location' },
  ];

  const customerColumns = [
    { Header: 'Number', accessor: 'number' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Location', accessor: 'location' },
    { Header: 'Vendor', accessor: 'vendor' },
  ];

  const contactColumns = [
    { Header: 'Number', accessor: 'number' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Vendor', accessor: 'vendor' },
  ];

  useEffect(() => {
    if (query.trim() === '') {
      setVendorResults(vendors);
      setCustomerResults(customers);
      setContactResults(contacts);
    } else {
      const regex = new RegExp(query, 'i');

      const vendorSearchResults = vendors.filter(vendor =>
        regex.test(vendor.number.toString()) ||
        regex.test(vendor.name) ||
        regex.test(vendor.location)
      );

      const customerSearchResults = customers.filter(customer =>
        regex.test(customer.number.toString()) ||
        regex.test(customer.name) ||
        regex.test(customer.location) ||
        regex.test(customer.vendor)
      );

      const contactSearchResults = contacts.filter(contact =>
        regex.test(contact.number.toString()) ||
        regex.test(contact.name) ||
        regex.test(contact.vendor)
      );

      setVendorResults(vendorSearchResults);
      setCustomerResults(customerSearchResults);
      setContactResults(contactSearchResults);
    }
  }, [query, vendors, customers, contacts]);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <h2 className="text-2xl font-bold mb-4">Vendors</h2>
      <EditableTable columns={vendorColumns} data={vendorResults} updateDataAction={updateVendor} basePath="/vendors" />
      <h2 className="text-2xl font-bold mb-4">Customers</h2>
      <EditableTable columns={customerColumns} data={customerResults} updateDataAction={updateCustomer} basePath="/customers" />
      <h2 className="text-2xl font-bold mb-4">Points of Contact</h2>
      <EditableTable columns={contactColumns} data={contactResults} updateDataAction={updateContact} basePath="/contacts" />
    </div>
  );
};

export default HomePage;
