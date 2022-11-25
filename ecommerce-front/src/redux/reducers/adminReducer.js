import { GET_ALL_ORDERS, GET_ALL_USERS, GET_ORDER_DETAILS } from "../actions/adminAction";

const initialState = {
    users: [],
    orders: [],
    orderDetails: [],
}

export default function adminReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload,
            }
        case GET_ALL_ORDERS:
            return {
                ...state,
                orders: action.payload,
            }
        case GET_ORDER_DETAILS:
            return{
                ...state,
                orderDetails: action.payload,
            }

        default:
            return state;
    }
}