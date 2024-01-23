"use client";

import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const CitySelectBox = () => {
  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }

  return (
    <Select
      showSearch
      style={{ width: 120 }}
      placeholder="Karachi"
      optionFilterProp="children"
      onChange={handleChange}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="jack">Karachi</Option>
      <Option value="lucy">Lahore</Option>
      <Option value="tom">Quetta</Option>
    </Select>
  );
};

export default CitySelectBox;