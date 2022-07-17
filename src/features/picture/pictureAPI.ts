// A mock function to mimic making an async request for data
const defaultUrl: string = "https://61ee6204d593d20017dbadb4.mockapi.io/items";
export async function fetchPictures(url: string = defaultUrl) {
  const response = await fetch(url);
  console.log(
    "🚀 ~ file: pictureAPI.ts ~ line 6 ~ fetchPictures ~ response",
    response
  );

  if (response.ok) {
    const json = await response.json();
    return Promise.resolve(json);
  } else {
    return Promise.reject("we can not fetch data");
  }
}
