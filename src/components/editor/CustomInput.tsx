import { classnames } from "../../utils/general"

interface CustomInputProps {
  customInput: string;
  setCustomInput: (value: string) => void;
}

const CustomInput = ({ customInput, setCustomInput }: CustomInputProps) => {
  return (
    <>
      <textarea
        rows={4}
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
        className={classnames(
          "focus:outline-none w-full border-2 border-arno-dark-600 z-10 rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] px-4 py-2 hover:shadow transition duration-200 bg-arno-dark-700 text-white mt-2 resize-none",
        )}
      ></textarea>
    </>
  )
}

export default CustomInput

