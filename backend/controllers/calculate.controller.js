import catchAsync from '../utils/catchAsync.js';

export const calculateTask1 = catchAsync(async (req, res, next) => {
  const { Pa, o1, o2, C } = req.body;
  const result = {};

  result.bW1 = findB(Pa, o1);
  result.W1 = Pa * 24 * result.bW1;
  result.I1 = result.W1 * C;
  result.W2 = Pa * 24 * (1 - result.bW1);
  result.B1 = result.W2 * C;
  result.bW2 = findB(Pa, o2);
  result.W3 = Pa * 24 * result.bW2;
  result.I2 = result.W3 * C;
  result.W4 = Pa * 24 * (1 - result.bW2);
  result.B2 = result.W4 * C;
  result.Income1 = result.I1 - result.B1;
  result.Income2 = result.I2 - result.B2;

  res.status(200).json({ status: 'success', data: result });
});

const findB = (Pa, o) =>
  integrate(
    (p) =>
      Math.exp(Math.pow(p - Pa, 2) / (2 * o * o)) /
      (o * Math.sqrt(2 * Math.PI)),
    Pa - Pa * 0.05,
    +Pa + Pa * 0.05,
    0.0001,
  );

const integrate = (func, lower, upper, step) => {
  let sum = 0;
  for (let x = lower; x <= upper; x += step) {
    sum += func(x + step / 2) * step;
  }
  return sum;
};
