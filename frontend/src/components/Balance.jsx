export function Balance({ value }) {
  return (
    <div className="flex p-6 w-full text-2xl">
      <div className="font-bold">Your balance</div>
      <div className="font-semibold ml-4">Rs {value}</div>
    </div>
  );
}
