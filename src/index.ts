#!/usr/bin/env node
import cac from "cac";
import fs from "node:fs";
import { version } from "../package.json";

const cli = cac();

cli.command("fund", "Fetch FUNDING.yml from @bjmhe")
  .action(async () => {
    // 拉取 https://raw.githubusercontent.com/bjmhe/bjmhe/refs/heads/master/.github/FUNDING.yml 到本地的 .github/FUNDING.yml
    const fundingUrl = "https://raw.githubusercontent.com/bjmhe/bjmhe/refs/heads/master/.github/FUNDING.yml";
    const funding = await fetch(fundingUrl);
    const fundingContent = await funding.text();
    fs.writeFileSync(".github/FUNDING.yml", fundingContent);
  })

cli.help();
cli.version(version);

cli.parse();
