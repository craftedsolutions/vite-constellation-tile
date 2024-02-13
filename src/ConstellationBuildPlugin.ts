import { Plugin } from "vite";
import fs from "fs";
import path from "path";

export default function ConstellationBuildPlugin(): Plugin {
  let isBuild = false;

  return {
    name: "constellation-build-plugin",
    enforce: "post",
    configResolved(config) {
      isBuild = config.command === "build";
    },
    generateBundle(options, bundle) {
      bundle;
      options;
      for (const [fileName, fileEntry] of Object.entries(bundle)) {
        if (fileName.startsWith("assets/index-") && fileName.endsWith(".css")) {
          console.log(fileName);
          delete bundle[fileName];
        }
        if (fileName.startsWith("assets/index-") && fileName.endsWith(".js")) {
          const newFileName = "main.bundle.js";
          bundle[newFileName] = {
            ...fileEntry,
            fileName: newFileName,
          };
          delete bundle[fileName];
        }
      }
    },
    writeBundle(options, bundle) {
      bundle;
      options;
      const source = path.resolve(
        options.dir || "dist",
        "assets",
        "main.bundle.js"
      );
      const destination = path.resolve(options.dir || "dist", "main.bundle.js");

      if (fs.existsSync(source)) {
        fs.renameSync(source, destination);
      }
    },
    transformIndexHtml(html) {
      const finalHtml = html
        .replace(
          /<script type="module" crossorigin src="\/assets\/index-[^"]+\.js"><\/script>/,
          '<script defer="defer" src="main.bundle.js"></script>'
        )
        .replace(
          /<script src="https:\/\/cdn\.cdp\.wiki\/cdp_bundle\.js"><\/script>/g,
          '<!-- <script src="https://cdn.cdp.wiki/cdp_bundle.js"></script> -->'
        )
        .replace(
          /<script src="mock\/mock_container.js"><\/script>/g,
          '<!-- <script src="mock/mock_container.js"></script> -->'
        );

      if (isBuild)
        return finalHtml.replace(
          /<link rel="stylesheet" href="tile.local.css">/g,
          '<!-- <link rel="stylesheet" href="tile.local.css"> -->'
        );
      return finalHtml;
    },
  };
}
