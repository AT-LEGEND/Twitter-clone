import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
	return (
		<div className="widgets">
			<div className="widgets__input">
				<SearchIcon className="widgets__searchIcon" />
				<input type="text" placeholder="Search Twitter" />
			</div>

			<div className="widgets__container">
				<h2>What's happening</h2>
				<TwitterTweetEmbed tweetId={"1088155908083986432"} />
				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="Errichto"
					options={{ height: 400 }}
				/>

				<TwitterShareButton
					url={"https://google.com"}
					options={{ text: "#google.com", via: "Errichto" }}
				/>
			</div>
		</div>
	);
}

export default Widgets;
