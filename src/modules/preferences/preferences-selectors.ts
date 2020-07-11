import { PREFERENCES_STORE_KEY } from './preferences-constants';

export const getPreferences = (state: any) => state?.[PREFERENCES_STORE_KEY] ?? {};
