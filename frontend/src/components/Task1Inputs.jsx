import { func } from 'prop-types';
import CustomSelect from './CustomSelect';
import CustomInput from './CustomInput';
import { transformers, switches, powerLines } from '../consts';

export default function Task1Inputs({ setFormData, onSubmit }) {
  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="inputs">
      <form onSubmit={onSubmit}>
        <h3>Вхідні дані</h3>
        <CustomSelect
          name="line"
          label="Тип ліній електропередач"
          onChange={handleInputChange}
          options={powerLines}
          def
        />
        <CustomSelect
          name="transformer"
          label="Тип трансформатора"
          onChange={handleInputChange}
          options={transformers}
        />
        <CustomSelect
          name="switch1"
          label="Перший вимикач"
          onChange={handleInputChange}
          options={switches}
        />
        <CustomSelect
          name="switch2"
          label="Другий вимикач"
          onChange={handleInputChange}
          options={switches}
        />
        <CustomSelect
          name="sectionSwitch"
          label="Секційний вимикач для двоколової системи"
          onChange={handleInputChange}
          options={switches}
        />
        <CustomInput
          name="buses"
          label="Кількість приєднань 10 кВ"
          onChange={handleInputChange}
        />
        <CustomInput
          name="length"
          label="Довжина ліній електропостачання, км"
          onChange={handleInputChange}
        />
        <CustomInput
          name="Za"
          label="Збитки у разі аварійних вимкнень, грн/кВт*год"
          onChange={handleInputChange}
        />
        <CustomInput
          name="Zp"
          label="Збитки у разі планових вимкнень, грн/кВт*год"
          onChange={handleInputChange}
        />
        <button>Розрахувати</button>
      </form>
    </div>
  );
}

Task1Inputs.propTypes = {
  setFormData: func,
  onSubmit: func,
};
