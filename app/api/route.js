export async function GET(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  } else {
    try {
      const response = await fetch("https://api.kanye.rest");
      const textResponse = await response.text(); // Get text response for logging
      console.log("Fetched data:", textResponse); // Log text response

      if (!response.ok) {
        console.error("Error response from Kanye Rest API:", textResponse);
        throw new Error(
          `Network response was not ok, status: ${response.status}`
        );
      }

      const data = JSON.parse(textResponse);
      console.log("JSON data:", data); // Log JSON data
      res.status(200).json(data);
    } catch (error) {
      console.error("Server error in /api/verses:", error);
      res.status(500).json({ message: error.message });
    }
  }
}
