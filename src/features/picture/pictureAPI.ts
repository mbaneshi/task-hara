// A mock function to mimic making an async request for data
const defaultUrl: string = "https://61ee6204d593d20017dbadb4.mockapi.io/items";
export async function fetchPictures(url: string = defaultUrl) {
  try {
    const response = await fetch(url)
      .then((response) => response.json())
      .then((result) => result);

    return response;
  } catch (e: any) {
    return e.message;
  }
}
