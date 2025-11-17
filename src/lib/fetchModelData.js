/**
 * fetchModel - Fetch a model from the web server.
 *
 * @param {string} url      The URL to issue the GET request.
 *
 */
async function fetchModel(url) {
  const models = await fetch("https://9j3ytp-3000.csb.app" + url);
  const data = await models.json();
  return data;
}

export default fetchModel;
