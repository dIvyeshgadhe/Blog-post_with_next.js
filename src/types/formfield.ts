import React from 'react'

export interface IRenderInputProps {
    register: any;
    type?: React.HTMLInputTypeAttribute;
    containerClasses?: string;
    inputClasses?: string;
    disabled?: boolean;
    children?: any;
    errorClasses?: string;
    labelClasses?: string;
    placeholder?: string;
    labelName: string;
    containerClass?: string | '';
    inputClass?: string | '';
    errorClass?: string | '';
    errorMessage?: any;
    formState?: {
        errors: any;
        touchedFields: any;
    }
}