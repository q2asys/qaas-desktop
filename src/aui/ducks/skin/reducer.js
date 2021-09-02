import { SET_APP_TITLE } from '../common-types';

const initialState = {
  appTitle: 'Big Title',
};

export default function skinReducer(state = initialState, action) {
  const skinState = {
    ...state,
  };

  const { type, value } = action;
  switch (type) {
    case SET_APP_TITLE:
      return {
        ...skinState,
        appTitle: value || '',
      };

    default:
      return skinState;
  }
}
