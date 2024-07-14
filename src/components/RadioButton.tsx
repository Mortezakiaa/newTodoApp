import { TRadionButton } from "@/Types/Types";

const RadioButton: React.FC<TRadionButton> = ({
  Value,
  ChangeStatus,
  Checked,
}) => {
  return (
    <div className="flex items-center pl-3">
      <input
        id={Value}
        checked={Checked}
        onChange={ChangeStatus}
        type="radio"
        value={Value}
        className="w-4 h-4 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label
        htmlFor={Value}
        className="w-full py-3 ml-2 text-sm font-medium text-white"
      >
        {Value}
      </label>
    </div>
  );
};

export default RadioButton;
