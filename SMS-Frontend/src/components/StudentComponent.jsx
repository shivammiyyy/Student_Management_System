import ButtonLink from "./ButtonLink";
import useStudentComponentHook from "../hooks/useStudentComponentHook";

const StudentComponent = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    departmentId,
    setDepartmentId,
    departments,
    saveOrUpdateStudent,
    title,
  } = useStudentComponentHook();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Back Button */}
      <div className="mb-6">
        <ButtonLink text="Go Back" toAction="/" />
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          {title}
        </h2>

        <form className="space-y-5">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-800"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter last name"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-800"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-800"
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Department
            </label>
            <select
              value={departmentId}
              onChange={(e) => setDepartmentId(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-800 bg-white"
            >
              <option value="Select Department">Select Department</option>
              {departments.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.departmentName}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex justify-center">
            <button
              onClick={saveOrUpdateStudent}
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

export default StudentComponent;
