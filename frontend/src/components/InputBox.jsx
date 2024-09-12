export function InputBox({ topLabel, placeholder, onChange }) {
  return (
    <div className="font-semibold text-base w-full px-5 pb-1 m-1">
      <div className="text-left pb-1">{topLabel}</div>
      <input
        onChange={onChange}
        className="w-full  p-1 border-2 rounded-md"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
