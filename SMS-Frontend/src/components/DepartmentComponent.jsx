import ButtonLink from "./ButtonLink";
import useDepartmentComponentHook from "../hooks/useDepartmentComponentHook";

const DepartmentComponent = () => {
  const {
    departmentName,
    setDepartmentName,
    departmentDescription,
    setDepartmentDescription,
    title,
    saveOrUpdateDepartment,
  } = useDepartmentComponentHook();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Back Button */}
      <div className="mb-6">
        <ButtonLink text="Go Back" toAction="/departments" />
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          {title}
        </h2>

        <form className="space-y-5">
          {/* Department Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Department Name
            </label>
            <input
              type="text"
              name="departmentName"
              placeholder="Enter Department Name"
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          {/* Department Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Department Description
            </label>
            <input
              type="text"
              name="departmentDescription"
              placeholder="Enter Department Description"
              value={departmentDescription}
              onChange={(e) => setDepartmentDescription(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex justify-center">
            <button
              onClick={saveOrUpdateDepartment}
              className="px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium shadow-md transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepartmentComponent;
