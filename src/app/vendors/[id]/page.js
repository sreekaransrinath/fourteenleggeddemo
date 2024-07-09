"use client";

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import { updateVendor } from '../../../redux/vendorsSlice';

const VendorDetail = ({ params }) => {
  const { id } = params;
  const dispatch = useDispatch();
  const vendor = useSelector((state) => state.vendors.find((vendor) => vendor.number === parseInt(id)));
  const [editing, setEditing] = useState(false);
  const [editingValues, setEditingValues] = useState(vendor);

  useEffect(() => {
    setEditingValues(vendor);
  }, [vendor]);

  if (!vendor) return <p>Vendor not found</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    dispatch(updateVendor({ id: vendor.number, changes: editingValues }));
    setEditing(false);
  };

  const handleCancelClick = () => {
    setEditingValues(vendor);
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
            vendor.name
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
      <p><strong>Number:</strong> {vendor.number}</p>
      <p><strong>Location:</strong>
        {editing ? (
          <input
            type="text"
            name="location"
            value={editingValues.location}
            onChange={handleChange}
          />
        ) : (
          vendor.location
        )}
      </p>
      <p><strong>Founded:</strong>
        {editing ? (
          <input
            type="text"
            name="founded"
            value={editingValues.founded}
            onChange={handleChange}
          />
        ) : (
          vendor.founded
        )}
      </p>
      <p><strong>Industry:</strong>
        {editing ? (
          <input
            type="text"
            name="industry"
            value={editingValues.industry}
            onChange={handleChange}
          />
        ) : (
          vendor.industry
        )}
      </p>
      <p><strong>Revenue:</strong>
        {editing ? (
          <input
            type="text"
            name="revenue"
            value={editingValues.revenue}
            onChange={handleChange}
          />
        ) : (
          vendor.revenue
        )}
      </p>
      <p><strong>Employees:</strong>
        {editing ? (
          <input
            type="text"
            name="employees"
            value={editingValues.employees}
            onChange={handleChange}
          />
        ) : (
          vendor.employees
        )}
      </p>
    </div>
  );
};

export default VendorDetail;
