/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { BOARD_BUTTON_PRESS } from './constants';

// The initial state of the App
const initialState = fromJS({

});

function boardReducer(state = initialState, action) {
    switch (action.type) {
        case BOARD_BUTTON_PRESS:
            console.log(action.id)
        default:
            return state;
    }
}

export default boardReducer;
