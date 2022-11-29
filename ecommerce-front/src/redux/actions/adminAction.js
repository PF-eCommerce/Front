export const GET_ALL_USERS = "GET_ALL_USERS"
export const SET_ADMIN = "SET_ADMIN"

export const getAllUsers = () => {
    return async (dispatch) => {
        try {
            fetch(`${process.env.REACT_APP_API_URL}/user/all`)
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