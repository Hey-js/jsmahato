setTimeout(
  () => require("child_process").execSync("node testPuppeteerCore.cjs", { stdio: "inherit" }),
  8000,
);
