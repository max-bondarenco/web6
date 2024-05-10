import { func } from 'prop-types';
import CustomInput from './CustomInput';

export default function Task1Inputs({ setFormData, onSubmit }) {
  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="inputs">
      <form onSubmit={onSubmit}>
        <h3>Вхідні дані</h3>
        <CustomInput
          name="Pa"
          label="Середньодобова потужність, МВт"
          onChange={handleInputChange}
        />
        <CustomInput
          name="o1"
          label="Початкове середньоквадратичне відхилення. МВт"
          onChange={handleInputChange}
        />
        <CustomInput
          name="o2"
          label="Зменшене середньоквадратичне відхилення. МВт"
          onChange={handleInputChange}
        />
        <CustomInput
          name="C"
          label="Вартість електроенергії, грн/кВт*год"
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
