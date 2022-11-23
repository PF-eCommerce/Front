export const GET_ALL_USERS = "GET_ALL_USERS"

const base = "http://localhost:3001"

export const getAllUsers = () => {
    return async (dispatch) => {
        try {
            fetch(`${base}/user/all`)
                .then(response => response.json())
                .then(response => {
                    console.log(response)
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