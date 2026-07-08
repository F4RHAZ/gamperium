import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Verify from "./pages/Verify";

export default function App() {
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    // If "?id=" exists in the URL bar, switch the entire view to the Verify screen
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("id")) {
      setIsVerifying(true);
    }
  }, []);

  // Render the verification interface if an ID parameter is present
  if (isVerifying) {
    return <Verify />;
  }

  // Otherwise, default back to your normal gaming shop homepage
  return <Home />;
}