import { EPreferencesFields } from './preferences-enums';

interface IPreferencesReducer {
  [EPreferencesFields.Optimistic]: boolean;
  [EPreferencesFields.Pessimistic]: boolean;
}

const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';

export const changeFieldValue = (payload: { name: EPreferencesFields, value: boolean }) => ({
  type: CHANGE_FIELD_VALUE,
  payload,
});

const DEFAULT_STATE = {
  [EPreferencesFields.Optimistic]: true,
  [EPreferencesFields.Pessimistic]: true,
};

export const preferencesReducer = (state: IPreferencesReducer = DEFAULT_STATE, action: ReturnType<typeof changeFieldValue>) => {
  switch (action.type) {
  case CHANGE_FIELD_VALUE:
    return {
      ...state,
      [action.payload.name]: action.payload.value
    };
  default:
    return state;
  }
};
