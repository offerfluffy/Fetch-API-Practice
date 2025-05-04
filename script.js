// Basic Syntax

const url = "https://someurl";

const request = new Request(url, {
  method: "POST", // "GET"
  headers: {},
  body: JSON.stringify({ key: "value" }),
});

async function apiCall() {
  try {
    const response = await fetch(request);
    // Response is an object with data about response to a request

    const data = await response.json();
    // Here will be data from response

    if (!response.ok) {
      // Error in response
      throw new Error(
        "Server Error:" + (data.error?.message || response.status)
      );
    }

    console.log("Success:", data);
  } catch (err) {
    // Error in Fetch
    console.log("Fetch Error", err);
  }
}
