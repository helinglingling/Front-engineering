// ./eslint-config-kuaigou.js
module.exports = {
    extends: "eslint:recommended",
    env: {
        browser: true,
        es6: true,
        node: true
    },
    rules: {
        "no-console": "off",
        "no-alert": "off",
        indent: ["warn", 4],
        quotes: ["warn", "single"]
    }
};