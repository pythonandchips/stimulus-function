// Babel is only used to support typescript with jest

module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
  ]
}

