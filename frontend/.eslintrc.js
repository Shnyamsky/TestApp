module.exports = {
  extends: ["react-app"],
  rules: {},
  overrides: [
    {
      files: ["**/*.js?(x)"],
      rules: {
        // ******** add ignore rules here *********
        "react-hooks/exhaustive-deps": "off"
      }
    }
  ]
}
