import reduce from 'lodash/reduce';
import get from 'lodash/get';

export default function (dataArray) {
  return reduce(dataArray, (result, value) => {
    const newResult = result;
    newResult[get(value, '_id')] = value;
    return newResult;
  }, {});
}
