import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "./firebase";
import "./TweetBox.css";

function TweetBox() {
	const [tweetMessage, setTweetMessage] = useState("");
	const [tweetImage, setTweetImage] = useState("");

	const sendTweet = (e) => {
		e.preventDefault();
		db.collection("posts").add({
			displayName: "Adi Thakkar",
			username: "adithakkar910",
			verified: true,
			text: tweetMessage,
			image: tweetImage,
			avatar: "https://twitter.com/ImpendingDeath0/photo",
		});

		setTweetImage("");
		setTweetMessage("");
	};

	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox__input">
					<Avatar src="https://twitter.com/ImpendingDeath0/photo" />
					<input
						onChange={(e) => setTweetMessage(e.target.value)}
						value={tweetMessage}
						placeholder="What's happening?"
					/>
				</div>

				<input
					value={tweetImage}
					onChange={(e) => setTweetImage(e.target.value)}
					type="text"
					placeholder="Optional: Enter image URL"
					className="tweetBox__imageInput"
				/>
				<Button onClick={sendTweet} className="tweetBox__button">
					Tweet
				</Button>
			</form>
		</div>
	);
}

export default TweetBox;
