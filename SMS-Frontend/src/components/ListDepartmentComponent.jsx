import ButtonLink from "./ButtonLink";
import useListDepartmentComponentHook from "../hooks/useListDepartmentComponentHook";

const ListDepartmentComponent = () => {
  const { departments, updateDepartment, removeDepartment } =
    useListDepartmentComponentHook();

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          List of Departments
        </h2>
        <ButtonLink text="Add Department" toAction="/add-department" />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl shadow-md border border-gray-200 bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm uppercase font-semibold tracking-wide">
            <tr>
              <th scope="col" className="px-6 py-3">
                Department Name
              </th>
              <th scope="col" className="px-6 py-3">
                Department Description
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {departments.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 text-gray-800">
                  {item.departmentName}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {item.departmentDescription}
                </td>
                <td className="px-6 py-4 flex items-center justify-center gap-3">
                  <button
                    onClick={() => updateDepartment(item.id)}
                    className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium shadow-sm transition"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => removeDepartment(item.id)}
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

export default ListDepartmentComponent;
