const largeLayout = [
  {
    i: 'a',
    x: 0,
    y: 0,
    w: 1,
    h: 2,
  },
  {
    i: 'b',
    x: 1,
    y: 0,
    w: 3,
    h: 2,
  },
  {
    i: 'c',
    x: 4,
    y: 0,
    w: 1,
    h: 2,
  },
];
const smallLayout = [
  {
    i: 'a',
    x: 0,
    y: 0,
    w: 1,
    h: 2,
  },
  {
    i: 'b',
    x: 0,
    y: 3,
    w: 1,
    h: 2,
  },
  {
    i: 'c',
    x: 0,
    y: 3,
    w: 1,
    h: 2,
  },
];

const defaultDashboardLayouts = {
  lg: largeLayout,
  sm: smallLayout,
};

const breakPoints = {
  lg: 640,
  sm: 0,
};

const columnsNumber = {
  lg: 12,
  sm: 1,
};

export { defaultDashboardLayouts, breakPoints, columnsNumber };
