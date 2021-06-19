// const sitemap = require("nextjs-sitemap-generator");
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

// sitemap({
//     baseUrl: "https://www.henwork.com",
//     pagesDirectory: __dirname + "/.next/server/pages",
//     targetDirectory: "public/",
//     sitemapFilename: "sitemap.xml",
// });

app
    .prepare()
    .then(() => {
        const server = express();
        server.get("*", (req, res) => {
            return handle(req, res);
        });
        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on ${port}`);
        });
    })
    .catch((e) => {
        console.log("error is >", e.stack);
        process.exit(1);
    });
