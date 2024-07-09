"use client";

import React from 'react';
import { useTable } from 'react-table';
import { useRouter } from 'next/navigation';

const Table = ({ columns, data, basePath }) => {
  const router = useRouter();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  const handleRowClick = (id) => {
    router.push(`${basePath}/${id}`);
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
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={row.id} className="cursor-pointer" onClick={() => handleRowClick(row.original.number)}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()} key={cell.column.id} className="border border-gray-300 px-4 py-2">
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
