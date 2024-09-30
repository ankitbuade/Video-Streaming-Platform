
const GOOGLE_API_KEY ="AIzaSyBeQ6Lh7iSABuKaE87-GNRWy8vpQKwjEX0"

export const youTubeAPI = 
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY

const PROXY = "https://cors-anywhere.herokuapp.com/";
export const YOUTUBE_SEARCH_API = `${PROXY}http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export const LIVE_CHAT_COUNT = 10