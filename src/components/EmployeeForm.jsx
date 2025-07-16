import { useForm } from 'react-hook-form'
import { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import EmployeeTable from './Table'
const API_URL_EMPLOYEE = 'http://localhost:8080/api/v1/employee'

const scheme = yup.object({
    name: yup.string()
        .required('Name is required')
        .min(2, 'Minimun 2 characters')
        .max(50, 'Maximum 50 characters'),

    fatherLastName: yup.string()
        .required('Paternal surname is required')
        .min(2, 'Minimun 2 characters')
        .max(50, 'Maximum 50 characters'),

    motherLastName: yup.string()
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

    countr: yup.string()
        .required('Country is required')
        .min(2, 'Minimun 2 characters')
        .max(150, 'Maximum 150 characters'),

    state: yup.string()
        .required('State is required')
        .min(2, 'Minimun 2 characters')
        .max(150, 'Maximum 150 characters'),

    curp: yup.string()
        .required('CURP is required')
        .matches( /^[A-Z\d]{18}$/  /* /^[A-Z]{4}[0-9]{6}[HM]{1}[A-Z]{2}[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/ */, 'Unvalid CURP'),

    rfc: yup.string()
        .required('RFC is required')
        .matches( /^[A-Z\d]{13}$/ /* /^[A-Z&Ñ]{4}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[01])[A-Z0-9]{3}$/ */, 'Unvalid RFC')
})

export const EmployeeForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(scheme),
    });
    const [employees, setEmployees] = useState([])
    const [loader, setLoader] = useState(false)

    const onSubmit = async (data) => {
        try {
            setLoader(true)
            await axios.post(API_URL_EMPLOYEE, JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json',
                },})
            setEmployees([...employees, data])
            console.log(employees)
        } catch (error) {
            console.error('Something went error: ', error)
        } finally {
            setLoader(false)
        }
    }
    
    const getAllEmployees = async() =>{
        try{
            const res = await axios.get(API_URL_EMPLOYEE,)
            setEmployees(res.data)
            console.log(employees)
        } catch(error){
            console.error('error: ', error)
        }
    }

    return (
        <>
            <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg">

                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Employee Registration</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {[
                        { label: 'Name', name: 'name' },
                        { label: 'Paternal Name', name: 'fatherLastName' },
                        { label: 'Maternal Name', name: 'motherLastName' },
                        { label: 'Company', name: 'company' },
                        { label: 'Gender', name: 'gender' },
                        { label: 'Birthdate', name: 'birthdate', type:'date'},
                        { label: 'Country', name: 'countr' },
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
                <div>
                    <h2 className='m-3 text-center'>Employees log</h2>
                    <div className='flex justify-center m-5'>
                        <button className='text-white' onClick={getAllEmployees}>
                            Update Employees Log
                        </button>
                    </div>
                        <EmployeeTable employees={employees} setEmployees={setEmployees}/>
                </div>
            </div>
        </>
    )
}