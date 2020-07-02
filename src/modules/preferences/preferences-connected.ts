import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { get as getFp } from 'lodash/fp';
import { PREFERENCES_STORE_KEY } from './preferences-constants';
import { EPreferencesFields } from './preferences-enums';
import { Preferences } from './preferences';

const getPreferencesStore = getFp(PREFERENCES_STORE_KEY);

const mapStateToProps = createStructuredSelector({
  optimisticFieldValue: compose(
    getFp(EPreferencesFields.Optimistic),
    getPreferencesStore,
  ),
  pessimisticFieldValue: compose(
    getFp(EPreferencesFields.Pessimistic),
    getPreferencesStore,
  ),
});

export const PreferencesConnected = connect(mapStateToProps)(Preferences);
