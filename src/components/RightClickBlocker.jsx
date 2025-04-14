import { useEffect } from "react";

const RightClickBlocker = () => {
  useEffect(() => {
    // Block right-click menu
    const handleContextMenu = (e) => {
      e.preventDefault();
      // Optional: Show alert or custom message
      alert("Right-click is disabled on this portfolio");
    };

    // Block keyboard shortcuts for dev tools
    const handleKeyDown = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
        alert("Developer tools are disabled");
      }
    };

    // Add event listeners
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup function
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default RightClickBlocker;
