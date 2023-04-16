import { exec } from "child_process";

export default async function handler(req, res) {
  const webhookSecret = process.env.WEBHOOK_SECRET;
  const requestToken = req.headers["x-webhook-token"];

  if (req.method === "POST") {
    if (requestToken !== webhookSecret) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    exec("node scripts/rebuild.js", (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: \${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Stderr: \${stderr}`);
        return;
      }
      console.log(`Stdout: \${stdout}`);
    });

    res.status(200).json({ message: "Rebuild triggered" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
