/**
 * Asynchronous function to perform a fetch operation.
 * @param {string} url - The URL for the fetch operation.
 * @returns {Promise} A Promise that resolves to the parsed JSON response.
 * @throws {Error} Throws an error if the fetch operation is not successful.
 */
const useFetch = async (url) => {
  try {
    const res = await fetch(`${url}`);

    if (!res.ok) {
      throw new Error(`Error fetch, status: ${res.status}`);
    }

    const json = await res.json();

    console.log(`result: ${JSON.stringify(json)}`);

    return json;
  } catch (error) {
    console.error(`Error in useFetch: ${error.message}`);
    throw error;
  }
};

export default useFetch;
