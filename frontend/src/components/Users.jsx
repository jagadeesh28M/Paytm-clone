export function Users() {
  return (
    <div className="w-full p-2">
      <div className="text-left font-bold text-2xl ml-4">Users</div>
      <div className="mr-10">
        <input
          className="w-full border-2 rounded-md mt-4 ml-4 p-2.5"
          type="text"
          placeholder="Search Users..."
        />
      </div>
      <div className="flex items-center w-full p-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10 mr-4 hover:cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        <div className="text-lg font-medium">User 1</div>
        <button
          className="bg-gray-800 text-white rounded ml-auto p-3 hover:bg-gray-950"
          type="button"
        >
          Send Money
        </button>
      </div>
    </div>
  );
}
