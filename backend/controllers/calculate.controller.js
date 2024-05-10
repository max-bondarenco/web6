import catchAsync from '../utils/catchAsync.js';
import { data } from '../consts/data.js';
import max from '../utils/max.js';

const calculate = (objects) => {
  const result = {};
  result.o = objects.reduce((acc, val) => acc + val.o, 0);
  result.tr = objects.reduce((acc, val) => acc + val.o * val.tr, 0) / result.o;
  result.ka = (result.o * result.tr) / 8760;
  const kmax = max(objects, (a, b) => a.tc - b.tc).tc;
  result.kp = (1.2 * kmax) / 8760;
  return result;
};

export const calculateTask1 = catchAsync(async (req, res, next) => {
  const {
    line,
    transformer,
    switch1,
    switch2,
    sectionSwitch,
    buses,
    length,
    Za,
    Zp,
  } = req.body;

  const lineData = data.powerLines[line];
  const transformerData = data.transformers[transformer];
  const switch1Data = data.switches[switch1];
  const switch2Data = data.switches[switch2];
  const sectionSwitchData = data.switches[sectionSwitch];
  const busData = data.bus;

  const objects = [
    { ...lineData, o: lineData.o * length },
    transformerData,
    switch1Data,
    switch2Data,
    { ...busData, o: busData.o * buses },
  ];

  const result = calculate(objects);
  result.o2 = 2 * result.o * (result.ka + result.kp) + sectionSwitchData.o;

  const transformerResult = calculate([transformerData]);
  result.Ma = transformerResult.ka * 5120 * 6451;
  result.Mp = transformerResult.kp * 5120 * 6451;
  result.M = result.Ma * Za + result.Mp * Zp;

  res.status(200).json({ status: 'success', data: result });
});
