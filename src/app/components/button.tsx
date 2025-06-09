'use client';

import clsx from 'clsx';
import React from 'react';

export interface ButttonProps
  extends Partial<React.ReactHTMLElement<HTMLButtonElement>> {
  disabled?: boolean;
}

export default function Button({ disabled, ...rest }: ButttonProps) {
  return (
    <button
      {...rest}
      type="submit"
      className={clsx(
        'py-2.5 px-5 bg-gray-900 text-zinc-500 text-base text-center font-medium rounded',
        !disabled && 'hover:bg-gray-800 active:bg-gray-950',
        disabled && 'text-zinc-100',
      )}
    ></button>
  );
}
