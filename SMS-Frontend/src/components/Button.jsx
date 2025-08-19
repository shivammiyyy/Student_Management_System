const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="inline-block px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-md transition mb-2"
    >
      {text}
    </button>
  );
};

export default Button;
