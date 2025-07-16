import axios from 'axios';

const EmployeeTable = ({ employees, setEmployees }) => {

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/employees/${id}`);
      setEmployees((prev) => prev.filter(emp => emp.id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 shadow-md rounded-lg">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Father Last Name</th>
            <th className="p-2">Mother Last Name</th>
            <th className="p-2">Employee Number</th>
            <th className="p-2">Company</th>
            <th className="p-2">Gender</th>
            <th className="p-2">Birthdate</th>
            <th className="p-2">Country</th>
            <th className="p-2">State</th>
            <th className="p-2">CURP</th>
            <th className="p-2">RFC</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((emp) => (
              <tr key={emp.id} className="hover:bg-gray-50 text-center">
                <td className="p-2">{emp.name}</td>
                <td className="p-2">{emp.fatherLastName}</td>
                <td className="p-2">{emp.motherLastName}</td>
                <td className="p-2">{emp.company}</td>
                <td className="p-2">{emp.gender}</td>
                <td className="p-2">{emp.birthdate}</td>
                <td className="p-2">{emp.countr}</td>
                <td className="p-2">{emp.state}</td>
                <td className="p-2">{emp.curp}</td>
                <td className="p-2">{emp.rfc}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(emp.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="p-4 text-center text-gray-500">
                No employees found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
