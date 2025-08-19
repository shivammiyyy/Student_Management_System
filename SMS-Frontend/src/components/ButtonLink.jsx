import { Link } from "react-router-dom";

const ButtonLink = ({ text, toAction }) => {
  return (
    <Link
      to={toAction}
      className="inline-block px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-md transition mb-2"
    >
      {text}
    </Link>
  );
};

export default ButtonLink;
