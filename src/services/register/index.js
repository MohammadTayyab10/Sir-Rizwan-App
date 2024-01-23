// import Cookies from "js-cookie";

export const registerUser= async (formData) => {
    try {
        const response = await fetch("/api/registartion",
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },

                body: JSON.stringify(formData)
            });
            
            const data = await response.json()
            return data;
            
        } 
        catch (e) {
            console.log('error', e);
        }
    }