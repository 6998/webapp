import { mediumActionTypes } from '../../lib/actionTypes';

const newCompanyReducer = (state = {}, action) => {
  if (action.type === mediumActionTypes.MEDIUM_LIST) {
    const posts = action.payload;

		const postsList = posts.reduce(function(obj, item, i) {
			const {title} = item;
			const link = title.replace(/\s+/g, '-').toLowerCase();
			item.formatedLink = link;
			obj[link] = item;
			return obj;
		}, {});

    return postsList;
  }
  return state;
};

export default newCompanyReducer;
