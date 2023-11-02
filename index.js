// import puppeteer from "puppeteer";
const puppeteer = require("puppeteer");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: path.join(__dirname, "public") });
});

app.get("/screenshot", async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({ width: 1920, height: 1080 });

    await page.goto(req.query.url);
    const screenshot = await page.screenshot({ encoding: "binary" });

    await browser.close();

    res.setHeader("Content-Disposition", 'attachment;filename="coolstoryBRO.webp"');
    res.setHeader("Content-Type", "image/png");
    res.send(screenshot);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

module.exports = app;
// http://localhost:3000/screenshot?url=https://bomanstatic.github.io/four-card-feature-section/
