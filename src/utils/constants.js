export const API_KEY = "AIzaSyB3IwOH4k5nlGKD8nIWY5iRzBmDpIxQHec"
export const GET_VIDEOS = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${API_KEY}`
// Api to call for videos accoring to search ;
// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=iphone&type=video&key=AIzaSyB69vuJJTe9_uUmm195ECdWysm7aWvAhPQ
export const SEARCH_SUGGESTION_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="