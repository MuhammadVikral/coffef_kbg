import { exec } from "child_process";
import express from "express";

const app = express();
const webhookSecret = process.env.WEBHOOK_SECRET;

// Set up a route to handle incoming webhook requests
app.post("/webhook", (req, res) => {
  const requestToken = req.headers["x-webhook-token"];

  if (requestToken !== webhookSecret) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Run the rebuild script as a child process
  exec("npm run rebuild", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).json({ message: "Error rebuilding the app" });
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return res.status(500).json({ message: "Error rebuilding the app" });
    }

    console.log(`Rebuild successful: ${stdout}`);
    return res.status(200).json({ message: "Rebuild triggered successfully" });
  });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
