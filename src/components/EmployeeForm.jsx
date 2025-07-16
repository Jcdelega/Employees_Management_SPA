import { useForm } from 'react-hook-form'
import { useReducer, useCallback, useEffect, useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const scheme = yup.object({
    name: yup.string()
        .required('Name is required')
        .min(2, 'Minimun 2 characters')
        .max(50, 'Maximum 50 characters'),

    paternalName: yup.string()
        .required('Paternal surname is required')
        .min(2, 'Minimun 2 characters')
        .max(50, 'Maximum 50 characters'),

    maternalName: yup.string()
        .required('Maternal surname is required')
        .min(2, 'Minimun 2 characters')
        .max(50, 'Maximum 50 characters'),

    company: yup.string()
        .required('Company is required')
        .min(2, 'Minimun 2 characters')
        .max(50, 'Maximum 50 characters'),

    gender: yup.string()
        .required('Gender is required')
        .min(2, 'Minimun 2 characters')
        .max(16, 'Maximum 16 characters'),

    birthdate: yup.date()
        .required('Birthdate mandatory')
        .typeError('Invalid format')
        .max(new Date(), 'You can not insert a date after today')
        .min(new Date(1935, 12, 31), 'The date should not be oldest than december 31st, 1935'),

    country: yup.string()
        .required('Country is required')
        .min(2, 'Minimun 2 characters')
        .max(150, 'Maximum 150 characters'),

    state: yup.string()
        .required('State is required')
        .min(2, 'Minimun 2 characters')
        .max(150, 'Maximum 150 characters'),

    curp: yup.string()
        .required('CURP is required')
        .matches(/^[A-Z]{4}[0-9]{6}[HM]{1}[A-Z]{2}[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/, 'Unvalid CURP'),

    rfc: yup.string()
        .required('RFC is required')
        .matches(/^[A-Z&Ñ]{4}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[01])[A-Z0-9]{3}$/, 'Unvalid RFC')
})

export const EmployeeForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(scheme),
    });
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <>
            <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg">

                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Employee Registration</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {[
                        { label: 'Name', name: 'name' },
                        { label: 'Paternal Name', name: 'paternalName' },
                        { label: 'Maternal Name', name: 'maternalName' },
                        { label: 'Company', name: 'company' },
                        { label: 'Gender', name: 'gender' },
                        { label: 'Birthdate', name: 'birthdate', type: 'date' },
                        { label: 'Country', name: 'country' },
                        { label: 'State', name: 'state' },
                        { label: 'CURP', name: 'curp' },
                        { label: 'RFC', name: 'rfc' },
                    ].map(({ label, name, type = 'text' }) => (
                        <div key={name} className="flex flex-col">
                            <label htmlFor={name} className="font-medium text-gray-700">{label}</label>
                            <input
                                id={name}
                                type={type}
                                {...register(name)}
                                className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>}
                        </div>
                    ))}

                    <div className="md:col-span-2 text-center">
                        <button
                            type="submit"
                            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}