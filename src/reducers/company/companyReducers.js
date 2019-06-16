import { userActionTypes } from '../../lib/actionTypes';

const newCompanyReducer = (
  state = { isLoadingSingleCompany: true },
  action
) => {
  if (action.type === userActionTypes.NEW_USER_SUCCESS) {
    const { singleCompany } = action.payload;
    return { ...state, singleCompany };
  }

  if (action.type === userActionTypes.START_NEW_USER) {
    return { ...state, isLoadingSingleCompany: true };
  }

  if (action.type === userActionTypes.FINISH_NEW_USER) {
    return { ...state, isLoadingSingleCompany: false };
  }

	if (action.type === userActionTypes.CLEAN_NEW_USER) {
		return { ...state, isLoadingSingleCompany: true, singleCompany: null };
	}
  return state;
};

export default newCompanyReducer;
