import { useState } from 'react';
import Task1Inputs from './Task1Inputs';
import Task1Results from './Task1Results';
import axios from '../api/axios';

const Task1 = () => {
  const [formData, setFormData] = useState({});
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post('/task1', formData);
      setData(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Завантаження...</div>;

  return (
    <div className="app">
      <Task1Inputs setFormData={setFormData} onSubmit={handleSubmit} />
      <Task1Results data={data} />
    </div>
  );
};

export default Task1;
