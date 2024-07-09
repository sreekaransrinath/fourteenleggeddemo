"use client";

import React, { useState } from 'react';
import { useTable, useRowSelect } from 'react-table';
import { FaEdit } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

const EditableTable = ({ columns, data, updateDataAction, basePath }) => {
  const [editingRow, setEditingRow] = useState(null);
  const [editingValues, setEditingValues] = useState({});
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
    getRowId: row => row.number,
  }, useRowSelect);

  const handleEditClick = (row, e) => {
    e.stopPropagation(); // Prevent the row click event
    setEditingRow(row.index);
    setEditingValues(row.original);
  };

  const handleSaveClick = () => {
    dispatch(updateDataAction({ id: editingValues.number, changes: editingValues }));
    setEditingRow(null);
    setEditingValues({});
  };

  const handleCancelClick = () => {
    setEditingRow(null);
    setEditingValues({});
  };

  const handleChange = (e, columnId) => {
    setEditingValues(prevValues => ({
      ...prevValues,
      [columnId]: e.target.value,
    }));
  };

  const handleRowClick = (row) => {
    if (editingRow === null) {
      router.push(`${basePath}/${row.original.number}`);
    }
  };

  return (
    <table {...getTableProps()} className="w-full border-collapse mb-5">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} key={column.id} className="border border-gray-300 px-4 py-2 bg-gray-800 text-white text-left">
                {column.render('Header')}
              </th>
            ))}
            <th className="border border-gray-300 px-4 py-2 bg-gray-800 text-white text-left">Actions</th>
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              key={row.id}
              onClick={() => handleRowClick(row)}
              className="cursor-pointer hover:bg-gray-100 transition"
            >
              {row.cells.map(cell => (
                <td {...cell.getCellProps()} key={cell.column.id} className="border border-gray-300 px-4 py-2">
                  {editingRow === row.index ? (
                    <input
                      type="text"
                      value={editingValues[cell.column.id]}
                      onChange={(e) => handleChange(e, cell.column.id)}
                      onClick={(e) => e.stopPropagation()} // Prevent row click when editing
                    />
                  ) : (
                    cell.render('Cell')
                  )}
                </td>
              ))}
              <td className="border border-gray-300 px-4 py-2">
                {editingRow === row.index ? (
                  <>
                    <button onClick={(e) => { e.stopPropagation(); handleSaveClick(); }} className="text-blue-500 mr-2">Save</button>
                    <button onClick={(e) => { e.stopPropagation(); handleCancelClick(); }} className="text-red-500">Cancel</button>
                  </>
                ) : (
                  <button onClick={(e) => handleEditClick(row, e)} className="text-blue-500">
                    <FaEdit />
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EditableTable;
