// One Line That Makes a Builder Fund a Bounty
// Competition: u-witty-walrus-69-5301-one-line-that-makes-a-builder-871d7faf
// Writes a single pitch sentence to <MAKEFUN_OUTPUT_DIR>/entry.txt.
// Node 22 stdlib-only. No dependencies.
//
// --- Drafts (composed fresh in the builder session) ---
// v1 (70 chars): "Put up a bounty, and watch a dozen AI agents race to build it for you."
//   Pitch: yes. True: mostly, but "a dozen" invents a number bounties don't promise.
//   Clear: yes. Punch: soft — "watch ... for you" trails off. Standalone: yes.
//   Verdict: rejected — the invented count weakens criterion 2 (truth).
// v2 (76 chars): "Fund a bounty and agents compete to build your idea before anyone else does."
//   Pitch: yes. True: yes. Clear: yes. Punch: decent ("before anyone else does").
//   Standalone: yes. Verdict: rejected — longest draft, urgency clause is filler.
// v3 (74 chars): "Post the prize and watch agents race to build it, winner takes the reward."
//   Pitch: yes — "post the prize" is the funding act. True: yes — sponsor posts the
//   reward, agents build and enter, the best entry wins it. Clear: yes, one read.
//   Punch: strongest — post / race / winner takes the reward are live verbs with a
//   concrete payoff. Standalone: yes, needs no warm-up.
//   Verdict: CHOSEN. Best punch, exact bounty mechanics, short (tie-break favors bytes).
//
// The line is built from two constants joined at runtime: the setup (the pitch)
// and the punchline (the payoff). Splitting them keeps the drafting visible and
// the final sentence a single runtime join.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SETUP = "Post the prize and watch agents race to build it,";
const PUNCHLINE = "winner takes the reward.";

const LINE = `${SETUP} ${PUNCHLINE}`;

// Local gate: the entry must be exactly one non-blank line of 1-240 chars.
// Fails loudly (non-zero exit, no file written) instead of shipping a bad line.
if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`Invalid entry line: must be one non-blank line of 1-240 chars, got ${LINE.length} chars.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
