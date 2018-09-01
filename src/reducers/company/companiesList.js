import { userActionTypes } from '../../lib/actionTypes';

const newCompanyReducer = (state = [], action) => {
  if (action.type === userActionTypes.COMPANIES_LIST) {
    const { companiesList } = action.payload;
    return companiesList;
  }
  return state;
};

export default newCompanyReducer;
