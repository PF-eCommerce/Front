export const GET_ALL_USERS = "GET_ALL_USERS"

const base = "http://localhost:3001"

export const getAllUsers = () => {
    return async (dispatch) => {
        try {
            fetch(`${base}/user/all`)
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