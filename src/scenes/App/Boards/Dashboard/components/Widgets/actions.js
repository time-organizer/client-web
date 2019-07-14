import APIService from '../../../../../../services/APIService';
import { widgetsPaths } from './utilities/config';

export const FETCH_WIDGET_DATA_REQUEST = 'FETCH_WIDGET_DATA_REQUEST';
export const FETCH_WIDGET_DATA_SUCCESS = 'FETCH_WIDGET_DATA_SUCCESS';
export const FETCH_WIDGET_DATA_FAILURE = 'FETCH_WIDGET_DATA_FAILURE';

const fetchWidgetDataRequest = widgetKey => ({
  type: FETCH_WIDGET_DATA_REQUEST,
  widgetKey,
});

const fetchWidgetDataSuccess = (widgetKey, data) => ({
  type: FETCH_WIDGET_DATA_SUCCESS,
  widgetKey,
  data,
});

const fetchWidgetDataFailure = (widgetKey, error) => ({
  type: FETCH_WIDGET_DATA_FAILURE,
  widgetKey,
  error,
});

const shouldFetchWidgetData = (state, widgetKey) => {
  const { boards: { workspace: { widgets } } } = state;
  const widget = widgets[widgetKey] || {};
  const { isFetching, didInvalidate, data } = widget;

  if (isFetching) {
    return false;
  }

  if (!data) {
    return true;
  }

  return didInvalidate;
};

export const fetchWidgetDataIfNeeded = (widgetKey, boardId) => (dispatch, getState) => {
  if (shouldFetchWidgetData(getState(), widgetKey)) {
    dispatch(fetchWidgetDataRequest(widgetKey));

    return APIService.post(widgetsPaths[widgetKey], {
      boardId,
    })
      .then(widgetData => dispatch(fetchWidgetDataSuccess(widgetKey, widgetData.data)))
      .catch(error => dispatch(fetchWidgetDataFailure(widgetKey, error)));
  }

  return new Promise(() => {});
};

export default fetchWidgetDataIfNeeded;
