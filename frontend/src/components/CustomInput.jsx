import { string, func } from 'prop-types';

export default function CustomInput({ onChange, label, name }) {
  return (
    <div>
      <label>{label}</label>
      <input
        step="0.1"
        required
        onChange={onChange}
        name={name}
        min="0"
        type="number"
      />
    </div>
  );
}

CustomInput.propTypes = {
  name: string,
  label: string,
  onChange: func,
};
