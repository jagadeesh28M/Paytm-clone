export function BottomWarning({ label, loginLabel }) {
  return (
    <div className="flex justify-center text-base font-medium w-full mt-3 mb-5">
      <div className="mr-1">{label}</div>
      <div className="underline hover:cursor-pointer hover:text-gray-600">
        {loginLabel}
      </div>
    </div>
  );
}
