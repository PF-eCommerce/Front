import { CLOSE_CHILD_MODAL, CLOSE_NEST_MODAL } from "../actions/modalsAction";

const initialState = {
    closed: false
}

export default function modalReducer(state = initialState, action) {
    switch (action.type) {
      case CLOSE_CHILD_MODAL:
        return {
          ...state,
          closed: true
        }
      case CLOSE_NEST_MODAL:
        return {
            ...state,
            closed: false
            }
      default:
        return state;
    }
  }