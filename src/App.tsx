import React, { useState } from 'react';
import Combobox, { Option } from "./common/combox";
import { EuiComboBoxOptionOption } from '@elastic/eui';


const App = () => {
  const [options, setOptions] = useState<Option[]>([
    {
      label: '',
      disabled: true,
    },
  ]);

  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const onChange = (selectedOptions: EuiComboBoxOptionOption<Option>[]) => {
    setSelectedOptions(selectedOptions.map(option => option));
  };

  const onCreateOption = (searchValue: string, flattenedOptions: Option[]) => {
    const normalizedSearchValue = searchValue.trim().toLowerCase();
    if (!normalizedSearchValue) {
      return;
    }
    const newOption = {
      label: searchValue,
    };
    // Create the option if it doesn't exist.
    if (
      flattenedOptions.findIndex(
        (option) => option.label.trim().toLowerCase() === normalizedSearchValue
      ) === -1
    ) {
      setOptions([...options, newOption]);
    }
    // Select the option.
    setSelectedOptions([...selectedOptions, newOption]);
  };

  return (
    <Combobox
      options={options}
      selectedOptions={selectedOptions}
      onChange={onChange}
      onCreateOption={onCreateOption}
      placeholder="Select or create options"
      isClearable={true}
      autoFocus
    />
  );
};

export default App;
