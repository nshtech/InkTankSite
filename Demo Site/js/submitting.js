function myFunction(name, email, message) {


	if (name == "Your Name *"){
		//name = "No Name";
		return - 1;
	}
	if (email == "Your E-mail *"){
		//email = "No Email";
		return -1;
	}
	if (message == "Your Message"){
		message = "No Message";
	}
	console.log("Name: " + name + '\n' + "Email: " + email + '\n' + "Message: " + message + '\n');
	return 1;
}