import {exampleActionTypes} from '../lib/actionTypes'

const exampleActions = {
  example(test) {
    return {
      type: exampleActionTypes.EXAMPLE_ACTION,
      data: test
    }
  }
};


export default exampleActions