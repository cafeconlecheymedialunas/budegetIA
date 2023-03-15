import { forwardRef, useEffect, useRef } from 'react';

export default function TextInput({  className = '', ...props }) {
    



    return (
        <div className="flex flex-col items-start">
            <textarea
                {...props}
                
                className={
                    'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm form-control' +
                    className
                }

            >
            </textarea>
        </div>
    );
}
