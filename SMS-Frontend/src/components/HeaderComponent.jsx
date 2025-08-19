import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header className="bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand / Logo */}
        <h1 className="text-xl font-bold text-white tracking-wide">
          Student Management System
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/students"
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                Students
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/departments"
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                Departments
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
