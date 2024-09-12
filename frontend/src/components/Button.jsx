export function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-800 text-white hover:bg-gray-950 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-base w-3/4 rounded-lg py-2 mt-4"
    >
      {label}
    </button>
  );
}
