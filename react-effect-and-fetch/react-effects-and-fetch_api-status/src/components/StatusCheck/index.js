import "./StatusCheck.css";
import { useEffect, useState } from "react";

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {
  const [loading, setLoading] = useState(true);
  const [statusIcon, setStatusIcon] = useState("⁉️");

  async function handleCheckApiStatus() {
    try {
      const response = await fetch(apiStatusUrl);

      if (!response.ok) {
        // Handle non-okay response (e.g., show an error message)
        console.error("API status check failed:", response.statusText);

        return;
      }

      const data = await response.json();

      // Assuming your API returns a property named "status"
      const apiStatus = data.status;

      // You should customize the conditions based on your API response
      if (apiStatus === "ok") {
        setStatusIcon("✅");
      } else {
        setStatusIcon("❌");
      }

      setLoading(false); // Set loading to false once the data is received
    } catch (error) {
      console.error("Error during API status check:", error);
      // Handle error state if needed
      setLoading(false);
    }
  }

  useEffect(() => {
    handleCheckApiStatus();
  }, []); // Empty dependency array to run the effect only on mount

  return (
    <article className="status-check">
      <div className="status-check__wrapper">
        <h2 className="status-check__heading">Status:</h2>
        {loading ? (
          <span className="status-check__icon">⏳</span>
        ) : (
          <span className="status-check__icon">{statusIcon}</span>
        )}
      </div>
      <button
        type="button"
        className="status-check__button"
        onClick={handleCheckApiStatus}
        disabled={loading}
      >
        Check API Status
      </button>
    </article>
  );
}
