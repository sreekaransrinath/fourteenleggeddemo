"use client";

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import { updateCustomer } from '../../../redux/customersSlice';
import { getCustomerById } from '../../../data';

const CustomerDetail = ({ params }) => {
  const { id } = params;
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customers.find((customer) => customer.number === parseInt(id)));
  const [editing, setEditing] = useState(false);
  const [editingValues, setEditingValues] = useState(customer);

  useEffect(() => {
    setEditingValues(customer);
  }, [customer]);

  if (!customer) return <p>Customer not found</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    dispatch(updateCustomer({ id: customer.number, changes: editingValues }));
    setEditing(false);
  };

  const handleCancelClick = () => {
    setEditingValues(customer);
    setEditing(false);
  };

  return (
    <div className="detail-container">
      <div className="flex justify-between items-center">
        <h1>
          {editing ? (
            <input
              type="text"
              name="name"
              value={editingValues.name}
              onChange={handleChange}
            />
          ) : (
            customer.name
          )}
        </h1>
        {editing ? (
          <>
            <button onClick={handleSaveClick} className="text-blue-500 mr-2">Save</button>
            <button onClick={handleCancelClick} className="text-red-500">Cancel</button>
          </>
        ) : (
          <button onClick={handleEditClick} className="text-blue-500">
            <FaEdit />
          </button>
        )}
      </div>
      <p><strong>Number:</strong> {customer.number}</p>
      <p><strong>Vendor:</strong>
        {editing ? (
          <input
            type="text"
            name="vendor"
            value={editingValues.vendor}
            onChange={handleChange}
          />
        ) : (
          customer.vendor
        )}
      </p>
      <p><strong>Location:</strong>
        {editing ? (
          <input
            type="text"
            name="location"
            value={editingValues.location}
            onChange={handleChange}
          />
        ) : (
          customer.location
        )}
      </p>
      <p><strong>Contact Person:</strong>
        {editing ? (
          <input
            type="text"
            name="contactPerson"
            value={editingValues.contactPerson}
            onChange={handleChange}
          />
        ) : (
          customer.contactPerson
        )}
      </p>
      <p><strong>Email:</strong>
        {editing ? (
          <input
            type="text"
            name="email"
            value={editingValues.email}
            onChange={handleChange}
          />
        ) : (
          customer.email
        )}
      </p>
      <p><strong>Phone:</strong>
        {editing ? (
          <input
            type="text"
            name="phone"
            value={editingValues.phone}
            onChange={handleChange}
          />
        ) : (
          customer.phone
        )}
      </p>
      <p><strong>Order Volume:</strong>
        {editing ? (
          <input
            type="text"
            name="orderVolume"
            value={editingValues.orderVolume}
            onChange={handleChange}
          />
        ) : (
          customer.orderVolume
        )}
      </p>
      <p><strong>Customer Since:</strong>
        {editing ? (
          <input
            type="text"
            name="customerSince"
            value={editingValues.customerSince}
            onChange={handleChange}
          />
        ) : (
          customer.customerSince
        )}
      </p>
    </div>
  );
};

export default CustomerDetail;
