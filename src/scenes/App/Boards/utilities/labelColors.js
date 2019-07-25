const colors = [
  '#4d79a7',
  '#f28e2c',
  '#e15659',
  '#76b7b2',
  '#59a14e',
  '#eec849',
  '#af79a1',
  '#ff9da8',
  '#9d7460',
  '#bbafac',
  '#ffffff',
  '#000000',
];

const labelColorsSelectOptions = [
  {
    value: 'none',
    label: 'None',
  },
  {
    value: colors[0],
    withShape: true,
    shapeColor: colors[0],
  },
  {
    value: colors[1],
    withShape: true,
    shapeColor: colors[1],
  },
  {
    value: colors[2],
    withShape: true,
    shapeColor: colors[2],
  },
  {
    value: colors[3],
    withShape: true,
    shapeColor: colors[3],
  },
  {
    value: colors[4],
    withShape: true,
    shapeColor: colors[4],
  },
  {
    value: colors[5],
    withShape: true,
    shapeColor: colors[5],
  },
  {
    value: colors[6],
    withShape: true,
    shapeColor: colors[6],
  },
  {
    value: colors[7],
    withShape: true,
    shapeColor: colors[7],
  },
  {
    value: colors[8],
    withShape: true,
    shapeColor: colors[8],
  },
];

const defaultLabelColor = labelColorsSelectOptions[0];

export { labelColorsSelectOptions, defaultLabelColor };


export default colors;
