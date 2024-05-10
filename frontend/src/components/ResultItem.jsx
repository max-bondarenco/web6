import { string } from 'prop-types';

const nameMapping = {
  o: 'Частота відмов одноколкової системи, 1/рік',
  tr: 'Середня тривалість відновлення, год',
  ka: 'Коефіцієнт аварійного простою одноколкової системи',
  kp: 'Коефіцієнт планового простою одноколкової системи',
  o2: 'Частота відмов двоколкової системи, 1/рік',
  Ma: 'Математичне сподівання аварійного недовідпущення',
  Mp: 'Математичне сподівання планового недовідпущення',
  M: 'Математичне сподівання збитків',
};

const ResultItem = ({ name, value }) => {
  return (
    <div className="output">
      <label htmlFor={`${name}`}>{nameMapping[name]}:</label>
      <input defaultValue={value} disabled id={`${name}`} />
    </div>
  );
};

ResultItem.propTypes = {
  name: string,
  value: string,
};

export default ResultItem;
