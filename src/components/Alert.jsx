import React from 'react';
import Button from './Button';

const Alert = ({ message }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 backdrop-blur-sm bg-black/5">
      <div className="p-4 rounded-xl border border-stone-700 w-3/12 text-center bg-white">
        <h1 className="font-poppins mb-3">{message}</h1>
        <Button text="Yes" variant="outlined" size="sm" spacing="10px" />
        <Button text="No" variant="primary" size="sm" />
      </div>
    </div>
  );
};

export default Alert;
