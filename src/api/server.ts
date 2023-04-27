export const url = 'https://beta3.api.climatiq.io/compute/aws/instance';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}



// Authorization: Bearer VVzlViPtvxS6hAfJmxqnA

export const getElectricity = () => {
    return fetch("https://www.carboninterface.com/api/v1/estimates")
}

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://beta3.api.climatiq.io/compute/aws/instance`,
        // change url to my glitch url once set up
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://www.carboninterface.com/api/v1/estimates`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'access-control-allow-origin':	'*',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://www.carboninterface.com/api/v1/estimates/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://www.carboninterface.com/api/v1/estimates/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}

