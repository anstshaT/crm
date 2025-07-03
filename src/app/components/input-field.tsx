'use client';

import { Field, FieldAttributes } from 'formik';
import React from 'react';

export interface InputFieldProps extends FieldAttributes<any> {
  label?: string;
  placeholder?: string;
  name: string;
  type?: string;
  id?: string;
}

export default function InputField({ 
  label, 
  id, 
  name,
  placeholder,
  type = "text",
  className,
  ...rest 
}: InputFieldProps) {
  // Use the name as the id if no id is provided
  const fieldId = id || name;
  
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={fieldId} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field
        id={fieldId}
        name={name}
        type={type}
        placeholder={placeholder}
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
        {...rest}
      />
    </div>
  );
}
