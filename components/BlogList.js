const fs = require("fs");
const path = require("path");
const ccase = require("change-case");
const matter = require('gray-matter');

module.exports = {
    get: (pagePath) => {
        if (pagePath.slice(-1) != "/") pagePath += "/";
        let files = fs.readdirSync(pagePath);
        files.sort((a, b) => a.position > b.position ? 1 : -1 );
        files = files.filter((file) => {
            if (file == "_app.js") return false;
            const stat = fs.lstatSync(pagePath + file);
            return stat.isFile();
        });

        return files.map((file) => {
            if (file == "index.js") {
                return {
                    name: "Home",
                    link: "/",
                };
            } else {
                link = path.parse(file).name;
                stuff = matter(file)
                const readFile = fs.readFileSync(`posts/blog/${path.parse(file).name}.md`, 'utf-8');
                const { data: frontmatter, content } = matter(readFile);
                return {
                    link: 'blog/' + link,
                    name: frontmatter.metaTitle
                };
            }
        });
    },
};