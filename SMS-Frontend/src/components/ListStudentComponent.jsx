import ButtonLink from "./ButtonLink";
import useListStudentComponentHook from "../hooks/useListStudentComponentHook";

const ListStudentComponent = () => {
  const { students, getDepartmentName, updateStudent, deleteStudentById } =
    useListStudentComponentHook();

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Heading */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">List of Students</h2>
        <ButtonLink text="Add Student" toAction="/add-student" />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl shadow-md border border-gray-200 bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm uppercase font-semibold tracking-wide">
            <tr>
              <th scope="col" className="px-6 py-3">First Name</th>
              <th scope="col" className="px-6 py-3">Last Name</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Department</th>
              <th scope="col" className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {students.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 text-gray-800">{item.firstName}</td>
                <td className="px-6 py-4 text-gray-800">{item.lastName}</td>
                <td className="px-6 py-4 text-gray-600">{item.email}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                    {getDepartmentName(item.departmentId)}
                  </span>
                </td>
                <td className="px-6 py-4 flex items-center justify-center gap-3">
                  <button
                    onClick={() => updateStudent(item.id)}
                    className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium shadow-sm transition"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteStudentById(item.id)}
                    className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-medium shadow-sm transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListStudentComponent;
