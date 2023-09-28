import React, { useState } from 'react';
import { EuiComboBox, EuiComboBoxOptionOption } from '@elastic/eui';

export interface Option {
  label: string;
  disabled?: boolean;
}

interface ComboboxProps {
  options: Option[];
  selectedOptions: Option[];
  onChange: (selectedOptions: EuiComboBoxOptionOption<Option>[]) => void;
  onCreateOption: (searchValue: string, flattenedOptions: Option[]) => void;
  placeholder: string;
  isClearable?: boolean;
  autoFocus?: boolean;
}

const Combobox: React.FC<ComboboxProps> = ({
  options,
  selectedOptions,
  onChange,
  onCreateOption,
  placeholder,
  isClearable = true,
  autoFocus,
}) => {
  return (
    <EuiComboBox<Option>
      aria-label="Accessible screen reader label"
      placeholder={placeholder}
      options={options}
      selectedOptions={selectedOptions.map(option => ({ label: option.label }))}
      onChange={onChange}
      onCreateOption={onCreateOption}
      isClearable={isClearable}
      data-test-subj="demoComboBox"
      autoFocus={autoFocus}
    />
  );
};

export default Combobox;
