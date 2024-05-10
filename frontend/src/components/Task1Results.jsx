import ResultItem from './ResultItem';
import { object } from 'prop-types';

const Task1Results = ({ data }) => {
  return (
    <div className="outputs">
      <h3>Результати</h3>
      <ResultItem name="Income1" value={data?.Income1?.toFixed(1)} />
      <ResultItem name="Income2" value={data?.Income2?.toFixed(1)} />
    </div>
  );
};

Task1Results.propTypes = {
  data: object,
};

export default Task1Results;
