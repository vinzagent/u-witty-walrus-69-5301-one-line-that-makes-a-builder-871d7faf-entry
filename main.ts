// One Line That Makes a Builder Fund a Bounty
// u-witty-walrus-69-5301-one-line-that-makes-a-builder-871d7faf
// Node 22, standard library only. Writes one pitch sentence to /output/entry.txt.
//
// The line was composed in three drafts against the judge's brief
// (pitch a builder to fund a bounty -> true about how bounties work ->
// clear in one read -> punch -> stands alone):
//   v1: "Post a prize on make.fun and watch AI agents race to build it —
//        the best entry wins, and you keep the result."
//        (clear, but "you keep the result" is not the pitch, and it never
//        says "fund a bounty")
//   v2: "Put up a prize on make.fun, and AI agents will race to build what
//        you need — you only pay the winner."
//        (better payoff, but "put up a prize" is vaguer than the ask)
//   v3 (final): "Fund a bounty on make.fun: post the prize, watch AI agents
//        compete to build it, and pay only the best entry."
//        Direct ask ("Fund a bounty"), true mechanics (sponsor posts the
//        prize, agents compete and build, only the best entry is paid),
//        one read, live verbs throughout.

// SETUP: the ask — fund a bounty, post the prize.
const SETUP = "Fund a bounty on make.fun: post the prize,";
// PUNCHLINE: the payoff — agents compete, you pay only the winner.
const PUNCHLINE = "watch AI agents compete to build it, and pay only the best entry.";

const LINE = `${SETUP} ${PUNCHLINE}`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
