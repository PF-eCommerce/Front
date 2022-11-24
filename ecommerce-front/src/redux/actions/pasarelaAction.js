export const STRIPE = "STRIPE";

export const payStripe = (products) => {
    return async (dispatch) => {
        try {
            await fetch(`${process.env.REACT_APP_API_URL}/create-order-stripe`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(products)
            })
            .then(response => response.json())
            .then((response) => window.location.replace(response))
        } catch (error) {
            console.log(error)
        }
    }
}
export const payPaypal = (products) => {
    return async (dispatch) => {
        try {
            await fetch(`${process.env.REACT_APP_API_URL}/create-order-paypal`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(products)
            })
            .then(response => response.json())
            .then((response) => window.location.replace(response))
        } catch (error) {
            console.log(error)
        }
    }
}