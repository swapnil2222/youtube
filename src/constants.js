export const API_KEY = "AIzaSyC071-gqnYtTldTyTHb-Lnt1xTtQwr4t04";

export const VIDEO_CATEGORIES_API =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?regionCode=In&key=" +
  API_KEY;

export const VIDEO_BY_ID_API = (videoId) =>
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
  videoId +
  "&key=" +
  API_KEY;
export const VIDEO_RECOMMENDATION_API = (nextPageToken) =>
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&&pageToken=" +
  nextPageToken +
  "&key=" +
  API_KEY;
