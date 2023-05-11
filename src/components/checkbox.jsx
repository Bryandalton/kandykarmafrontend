import { useState } from "react";

export function Checkbox({ id, label, checked, onChange }) {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleCheckboxChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <div className="checkbox">
      {[1, 2, 3, 4, 5].map((value) => (
        <label key={value}>
          <input
            value={value}
            type="checkbox"
            checked={selectedValue=== String(value)}
            onChange={handleCheckboxChange}
          />
        </label>
      ))}

      <label htmlFor={id}>{label}</label>
    </div>
  );
}
