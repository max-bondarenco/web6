import ResultItem from './ResultItem';
import { object } from 'prop-types';

const Task1Results = ({ data }) => {
  return (
    <div className="outputs">
      <h3>Результати</h3>
      <ResultItem name="o" value={data?.o?.toFixed(2)} />
      <ResultItem name="tr" value={data?.tr?.toFixed(2)} />
      <ResultItem name="ka" value={data?.ka?.toFixed(5)} />
      <ResultItem name="kp" value={data?.kp?.toFixed(5)} />
      <ResultItem name="o2" value={data?.o2?.toFixed(2)} />
      <ResultItem name="Ma" value={data?.Ma?.toFixed(2)} />
      <ResultItem name="Mp" value={data?.Mp?.toFixed(2)} />
      <ResultItem name="M" value={data?.M?.toFixed(2)} />
    </div>
  );
};

Task1Results.propTypes = {
  data: object,
};

export default Task1Results;
