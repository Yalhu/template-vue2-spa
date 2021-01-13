module.exports = {
    processors: [],
    plugins: [],
    extends: ["stylelint-config-standard", "stylelint-order"], // 这是官方推荐的方式
    rules: {
        "no-empty-source": [null, { severity: "warning"}],
        "block-no-empty": null,
        "block-closing-brace-empty-line-before": null,
        "rule-empty-line-before": null,
        "comment-empty-line-before": null
    },
    ignoreFiles: [
        "src/assets/css/reset.css"
    ]
};
