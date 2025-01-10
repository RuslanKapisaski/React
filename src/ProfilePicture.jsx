function ProfilePicture() {
	const imageUrl = "./src/assets/IT.jpg";
	//const handleClick = (e) => console.log("Ouch!");
	const handleClick = (e) => (e.target.style.display = "none");

	return <img onClick={(e) => handleClick(e)} src={imageUrl}></img>;
}

export default ProfilePicture;
