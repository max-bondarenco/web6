import { string, func, array } from 'prop-types';

export default function CustomSelect({ name, label, onChange, options }) {
  return (
    <div>
      <label>{label}</label>
      <select required onChange={onChange} name={name}>
        <option value="" style={{ display: 'none' }}>
          Оберіть зі списку
        </option>
        {options.map((item) => (
          <option key={`${name}-${item}`} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

CustomSelect.propTypes = {
  name: string,
  label: string,
  onChange: func,
  options: array,
};
