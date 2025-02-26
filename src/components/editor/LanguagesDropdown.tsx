import Select from "react-select"
import { customStyles } from "../constants/customStyles"
import { languageOptions } from "../constants/languageOptions"

import { ActionMeta, OnChangeValue } from "react-select";


interface LanguagesDropdownProps {
  onSelectChange: (selectedOption: OnChangeValue<{ value: string; label: string }, false>, actionMeta: ActionMeta<{ value: string; label: string }>) => void;
}

const LanguagesDropdown = ({ onSelectChange }: LanguagesDropdownProps) => {
  return (
    <Select
      placeholder={`Filter By Category`}
      options={languageOptions}
      styles={customStyles}
      defaultValue={languageOptions[0]}
      onChange={(selectedOption, actionMeta) => onSelectChange(selectedOption, actionMeta)}
    />
  )
}

export default LanguagesDropdown

