import { string } from 'prop-types';

const nameMapping = {
  Income1: 'Прибуток до вдосконалення',
  Income2: 'Прибуток після вдосконалення',
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
