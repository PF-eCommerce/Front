export const GET_ALL_USERS = "GET_ALL_USERS"

export const getAllUsers = () => {
    return async (dispatch) => {
        try {
            fetch(`${process.env.REACT_APP_API_URL}/user/all`)
                .then(response => response.json())
                .then(response => {
                    const data = response.map(u => {
                        return {
                            userName: u.userName,
                            id: u._id,
                            email: u.email,
                            admin: u.admin, 
                            confirmed: u.confirmed,
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