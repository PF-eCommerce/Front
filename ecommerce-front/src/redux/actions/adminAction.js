export const GET_ALL_USERS = "GET_ALL_USERS"
export const SET_ADMIN = "SET_ADMIN"
export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
export const GET_ORDER_DETAILS = "GET_ORDER_DETAILS";

export const getAllUsers = () => {
    return async (dispatch) => {
        try {
            await fetch(`${process.env.REACT_APP_API_URL}/user/all`)
                .then(response => response.json())
                .then(response => {
                    // console.log(response)
                    const data = response.map(u => {
                        const isAdmin = u.admin ? u.admin.includes("admin") : false
                        return {
                            userName: u.nickname,
                            id: u._id,
                            email: u.email,
                            admin: isAdmin,
                            confirmed: u.email_verified,
                        }
                    })
                    return dispatch({
                        type: GET_ALL_USERS,
                        payload: data
                    })
                })
        } catch (error) {
            console.log(error);
        }
    };
}
export const setAdmin = (id) => {
    return async () => {
        try {
            await fetch(`${process.env.REACT_APP_API_URL}/setAdmin/${id}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify()
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export const getOrders = () => {
    return async (dispatch) => {
        try {
            await fetch(`${process.env.REACT_APP_API_URL}/orders`)
                .then(response => response.json())
                .then(response => {
                    const data = response.orders?.map((o) => {
                        return {
                            user: o.userPaymentInfo.name !== "" ? o.userPaymentInfo.name : "Desconocido",
                            idUser: o.user,
                            id: o._id,
                            payment: o.PaymentMethod,
                            status: o.status,
                            delivered: o.isDelivered,
                            price: o.totalPrice,
                        }
                    })
                    console.log(data)
                    return dispatch({
                        type: GET_ALL_ORDERS,
                        payload: data,
                    })
                })
        } catch (error) {
            console.log("actions/adminAction/getOrders", error);
        }
    }
}
export const getOrderDetails = (id) => {
    return async (dispatch) => {
        try {
            await fetch(`${process.env.REACT_APP_API_URL}/order/${id}`)
                .then(response => response.json())
                .then(response => {
                    return dispatch({
                        type: GET_ORDER_DETAILS,
                        payload: response,
                    })
                })
        } catch (error) {
            console.log("actions/adminAction/getOrderDetails", error)
        }
    }
}