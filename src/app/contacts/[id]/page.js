"use client";

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import { updateContact } from '../../../redux/contactsSlice';
import { getContactById } from '../../../data';

const ContactDetail = ({ params }) => {
  const { id } = params;
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contacts.find((contact) => contact.number === parseInt(id)));
  const [editing, setEditing] = useState(false);
  const [editingValues, setEditingValues] = useState(contact);

  useEffect(() => {
    setEditingValues(contact);
  }, [contact]);

  if (!contact) return <p>Contact not found</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    dispatch(updateContact({ id: contact.number, changes: editingValues }));
    setEditing(false);
  };

  const handleCancelClick = () => {
    setEditingValues(contact);
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
            contact.name
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
      <p><strong>Number:</strong> {contact.number}</p>
      <p><strong>Vendor:</strong>
        {editing ? (
          <input
            type="text"
            name="vendor"
            value={editingValues.vendor}
            onChange={handleChange}
          />
        ) : (
          contact.vendor
        )}
      </p>
      <p><strong>Position:</strong>
        {editing ? (
          <input
            type="text"
            name="position"
            value={editingValues.position}
            onChange={handleChange}
          />
        ) : (
          contact.position
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
          contact.email
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
          contact.phone
        )}
      </p>
      <p><strong>Office Location:</strong>
        {editing ? (
          <input
            type="text"
            name="officeLocation"
            value={editingValues.officeLocation}
            onChange={handleChange}
          />
        ) : (
          contact.officeLocation
        )}
      </p>
      <p><strong>Years with Company:</strong>
        {editing ? (
          <input
            type="text"
            name="yearsWithCompany"
            value={editingValues.yearsWithCompany}
            onChange={handleChange}
          />
        ) : (
          contact.yearsWithCompany
        )}
      </p>
      <p><strong>LinkedIn Profile:</strong>
        {editing ? (
          <input
            type="text"
            name="linkedIn"
            value={editingValues.linkedIn}
            onChange={handleChange}
          />
        ) : (
          <a href={contact.linkedIn}>LinkedIn</a>
        )}
      </p>
    </div>
  );
};

export default ContactDetail;
