import React from 'react';

export const AlertDialog = ({ children }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg">{children}</div>
  </div>
);

export const AlertDialogTrigger = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

export const AlertDialogContent = ({ children }) => (
  <div className="mt-4">{children}</div>
);

export const AlertDialogHeader = ({ children }) => (
  <h3 className="text-lg font-bold mb-2">{children}</h3>
);

export const AlertDialogFooter = ({ children }) => (
  <div className="mt-4 flex justify-end">{children}</div>
);

export const AlertDialogTitle = ({ children }) => (
  <h4 className="text-xl font-bold">{children}</h4>
);

export const AlertDialogDescription = ({ children }) => (
  <p className="text-gray-600">{children}</p>
);

export const AlertDialogAction = ({ children, onClick }) => (
  <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onClick}>
    {children}
  </button>
);