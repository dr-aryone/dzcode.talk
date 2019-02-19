const apiKey = "AIzaSyAvEemvollVOhi8kPfzT8eS4flShgc45LM";
// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];

// Authorization scopes required by the API. If using multiple scopes,
// separated them with spaces.
const SCOPES = "https://www.googleapis.com/auth/youtube.readonly";

const content = document.getElementById("content");
const channelInput = document.getElementById("channel-input");
const channelData = document.getElementById("channel-data");
const channelForm = document.getElementById("channel-form");
const videoContainer = document.getElementById("video-container");

const getChannel = channel => {
gapi.client.youtube.channels.list({
part :
forUserName : 
});
};
