import axios from "axios";

const options = {
	method: "POST",
	url: "https://belizeondwayapi.azurewebsites.net/api/customer/login",
	headers: { ApplicationId: "belizeondwayclient" },
	data: { email: "a", password: "a" },
};

axios
	.request(options)
	.then(function (response) {
		console.log(response.data);
	})
	.catch(function (error) {
		console.error(error);
	});
