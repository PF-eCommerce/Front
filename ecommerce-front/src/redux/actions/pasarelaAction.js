export const STRIPE = "STRIPE";

const base = "http://localhost:3001"

export const payStripe = (products) => {
    return async (dispatch) => {
        try {
            await fetch(`${base}/create-order-stripe`, {
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
            await fetch(`${base}/create-order-paypal`, {
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