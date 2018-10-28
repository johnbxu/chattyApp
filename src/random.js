function generateRandomString(numberOfChars) {
	return Math.random().toString(36).substr(2, numberOfChars);
}

export default generateRandomString;
