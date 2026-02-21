// Pattern Generator — Run with: node generate_patterns.js
// Outputs patterns.js with 225 AI fighting patterns

const fs = require('fs');
const patterns = [];
let id = 0;

function add(name, cat, diff, cond, actions) {
    patterns.push({ id: ++id, name, category: cat, difficulty: diff, conditions: cond, actions });
}

// Helper shortcuts
const P = (type) => ({ action: 'punch', type });
const M = (dir, dur = 300) => ({ action: 'move', dir, duration: dur });
const B = (dur = 400) => ({ action: 'block', duration: dur });
const W = (dur = 200) => ({ action: 'wait', duration: dur });
const J = () => ({ action: 'jump' });

const CLOSE = { minDist: 0, maxDist: 60 };
const MID = { minDist: 40, maxDist: 120 };
const FAR = { minDist: 100, maxDist: 999 };
const ANY = { minDist: 0, maxDist: 999 };
const LOW_HP = { maxHpPct: 0.3 };
const HIGH_STA = { minStaPct: 0.5 };
const LOW_STA = { maxStaPct: 0.3 };

// ═══════════════════════════════════════
// CATEGORY 1: JAB PATTERNS (1–25)
// ═══════════════════════════════════════
const jabNames = [
    'Quick Jab', 'Double Jab', 'Triple Jab', 'Pawing Jab', 'Step Jab',
    'Retreat Jab', 'Flicker Jab', 'Body Jab', 'Measuring Jab', 'Stiff Jab',
    'Jab-Block', 'Jab Feint', 'Up Jab', 'Snap Jab', 'Blinding Jab',
    'Jab-Retreat', 'Range Finder', 'Jab Pepper', 'Jab Poke', 'Lazy Jab',
    'Check Jab', 'Jab Pull', 'Jab Slide', 'Step-In Jab', 'Cutting Jab'
];
jabNames.forEach((n, i) => {
    const acts = [];
    if (i % 3 === 1) acts.push(M(1, 200));
    if (i % 5 === 0) acts.push(W(150));
    acts.push(P('jab'));
    if (n.includes('Double') || n.includes('Triple')) acts.push(W(100), P('jab'));
    if (n.includes('Triple')) acts.push(W(100), P('jab'));
    if (n.includes('Retreat') || n.includes('Pull')) acts.push(M(-1, 300));
    if (n.includes('Block')) acts.push(B(300));
    add(n, 'JAB', Math.min(5, 1 + Math.floor(i / 5)), i < 12 ? MID : ANY, acts);
});

// ═══════════════════════════════════════
// CATEGORY 2: CROSS PATTERNS (26–45)
// ═══════════════════════════════════════
const crossNames = [
    'Straight Cross', 'Power Cross', 'Step Cross', 'Counter Cross', 'Rear Straight',
    'Cross-Block', 'Lunging Cross', 'Delayed Cross', 'Cross Pull', 'Low Cross',
    'Cross Overhand', 'Snap Cross', 'Quick Cross', 'Feint Cross', 'Heavy Cross',
    'Cross Fade', 'Cross Step-Back', 'Cross Slide', 'Darting Cross', 'Finishing Cross'
];
crossNames.forEach((n, i) => {
    const acts = [];
    if (n.includes('Step') || n.includes('Lunge') || n.includes('Dart')) acts.push(M(1, 250));
    if (n.includes('Delay')) acts.push(W(400));
    acts.push(P('cross'));
    if (n.includes('Block')) acts.push(B(400));
    if (n.includes('Pull') || n.includes('Fade') || n.includes('Back')) acts.push(M(-1, 350));
    add(n, 'CROSS', Math.min(5, 1 + Math.floor(i / 4)), i < 10 ? MID : ANY, acts);
});

// ═══════════════════════════════════════
// CATEGORY 3: HOOK PATTERNS (46–65)
// ═══════════════════════════════════════
const hookNames = [
    'Lead Hook', 'Rear Hook', 'Check Hook', 'Shovel Hook', 'Wide Hook',
    'Tight Hook', 'Step Hook', 'Hook-Block', 'Double Hook', 'Body Hook',
    'Hook Uppercut', 'Leaping Hook', 'Counter Hook', 'Short Hook', 'Long Hook',
    'Hook Fade', 'Hook Pull', 'Shifting Hook', 'Pivot Hook', 'KO Hook'
];
hookNames.forEach((n, i) => {
    const acts = [];
    if (n.includes('Step') || n.includes('Leap') || n.includes('Shift')) acts.push(M(1, 200));
    if (n.includes('Pivot') || n.includes('Check')) acts.push(M(-1, 100));
    acts.push(P('hook'));
    if (n.includes('Double')) acts.push(W(150), P('hook'));
    if (n.includes('Uppercut')) acts.push(W(100), P('uppercut'));
    if (n.includes('Block')) acts.push(B(400));
    if (n.includes('Fade') || n.includes('Pull')) acts.push(M(-1, 350));
    add(n, 'HOOK', Math.min(5, 2 + Math.floor(i / 5)), CLOSE, acts);
});

// ═══════════════════════════════════════
// CATEGORY 4: UPPERCUT PATTERNS (66–85)
// ═══════════════════════════════════════
const ucNames = [
    'Lead Uppercut', 'Rear Uppercut', 'Step Uppercut', 'Body Uppercut', 'Short Uppercut',
    'Rising Uppercut', 'Counter Uppercut', 'Double Uppercut', 'Uppercut-Cross', 'Uppercut-Hook',
    'Sneaky Uppercut', 'Power Uppercut', 'Shifting Uppercut', 'Jump Uppercut', 'Uppercut Block',
    'Quick Uppercut', 'Uppercut Pull', 'Delayed Uppercut', 'Flash Uppercut', 'KO Uppercut'
];
ucNames.forEach((n, i) => {
    const acts = [];
    if (n.includes('Step') || n.includes('Shift')) acts.push(M(1, 200));
    if (n.includes('Jump')) acts.push(J());
    if (n.includes('Delay')) acts.push(W(500));
    acts.push(P('uppercut'));
    if (n.includes('Double')) acts.push(W(150), P('uppercut'));
    if (n.includes('Cross')) acts.push(W(100), P('cross'));
    if (n.includes('Hook')) acts.push(W(100), P('hook'));
    if (n.includes('Block')) acts.push(B(400));
    if (n.includes('Pull')) acts.push(M(-1, 350));
    add(n, 'UPPERCUT', Math.min(5, 2 + Math.floor(i / 4)), CLOSE, acts);
});

// ═══════════════════════════════════════
// CATEGORY 5: COMBO PATTERNS (86–120)
// ═══════════════════════════════════════
const combos = [
    ['One-Two', ['jab', 'cross']],
    ['One-Two-Three', ['jab', 'cross', 'hook']],
    ['One-Two-Body', ['jab', 'cross', 'jab']],
    ['Triple Threat', ['jab', 'jab', 'cross']],
    ['Classic Combo', ['jab', 'cross', 'hook', 'cross']],
    ['Body Breaker', ['jab', 'jab', 'cross', 'hook']],
    ['Flurry Rush', ['jab', 'jab', 'jab', 'cross']],
    ['Power Chain', ['cross', 'hook', 'uppercut']],
    ['Knockout Combo', ['jab', 'cross', 'uppercut']],
    ['Southpaw Special', ['cross', 'jab', 'hook']],
    ['Blitz Combo', ['jab', 'jab', 'cross', 'cross']],
    ['Hook Sandwich', ['hook', 'jab', 'hook']],
    ['Uppercut Finish', ['jab', 'jab', 'uppercut']],
    ['Rapid Fire', ['jab', 'jab', 'jab', 'jab']],
    ['Wall Breaker', ['cross', 'cross', 'hook']],
    ['Staircase', ['jab', 'cross', 'hook', 'uppercut']],
    ['Descending', ['uppercut', 'hook', 'cross', 'jab']],
    ['Pendulum', ['hook', 'cross', 'hook', 'cross']],
    ['Double Dutch', ['jab', 'hook', 'jab', 'hook']],
    ['Missile Launch', ['jab', 'jab', 'cross', 'uppercut']],
    ['Freight Train', ['cross', 'hook', 'cross', 'hook']],
    ['Sniper Burst', ['jab', 'cross', 'jab', 'cross']],
    ['Whirlwind', ['hook', 'hook', 'uppercut']],
    ['Earthquake', ['uppercut', 'uppercut', 'hook']],
    ['Lightning Rod', ['jab', 'uppercut', 'cross']],
    ['Thunder Clap', ['cross', 'uppercut', 'hook']],
    ['Viper Strike', ['jab', 'hook', 'cross', 'uppercut']],
    ['Barrage', ['jab', 'jab', 'jab', 'cross', 'hook']],
    ['Destroyer', ['cross', 'hook', 'uppercut', 'cross']],
    ['Fury Fists', ['jab', 'cross', 'jab', 'cross', 'jab']],
    ['Iron Storm', ['hook', 'cross', 'uppercut', 'jab']],
    ['Blinding Speed', ['jab', 'jab', 'hook', 'cross']],
    ['Haymaker Chain', ['hook', 'uppercut', 'hook']],
    ['Piston Combo', ['jab', 'cross', 'jab', 'hook']],
    ['Final Flash', ['jab', 'cross', 'hook', 'uppercut', 'cross']],
];
combos.forEach(([n, punches], i) => {
    const acts = [M(1, 150)];
    punches.forEach((p, j) => {
        if (j > 0) acts.push(W(100));
        acts.push(P(p));
    });
    acts.push(M(-1, 250));
    add(n, 'COMBO', Math.min(5, 2 + Math.floor(punches.length / 2)), MID, acts);
});

// ═══════════════════════════════════════
// CATEGORY 6: DEFENSIVE PATTERNS (121–150)
// ═══════════════════════════════════════
const defNames = [
    'Turtle Guard', 'Peek-a-boo', 'Shell Block', 'Counter Jab', 'Counter Cross',
    'Counter Hook', 'Slip Jab', 'Slip Cross', 'Block-Counter', 'Retreat Block',
    'Block Flurry', 'Absorb-Strike', 'Defensive Jab', 'Guard Rush', 'Block Reset',
    'High Guard', 'Body Guard', 'Shoulder Roll', 'Catch Counter', 'Bait Block',
    'Double Block', 'Block Step', 'Guard Switch', 'Defensive Shell', 'Stand Ground',
    'Pull Counter', 'Lean Back', 'Wall Block', 'Block Uppercut Counter', 'Parry Jab'
];
defNames.forEach((n, i) => {
    const acts = [];
    acts.push(B(300 + (i % 4) * 100));
    if (n.includes('Counter') || n.includes('Catch') || n.includes('Parry')) {
        acts.push(W(50));
        const ct = ['jab', 'cross', 'hook', 'uppercut'];
        acts.push(P(ct[i % 4]));
    }
    if (n.includes('Retreat') || n.includes('Pull') || n.includes('Lean')) acts.push(M(-1, 400));
    if (n.includes('Rush') || n.includes('Step')) acts.push(M(1, 200));
    if (n.includes('Double') || n.includes('Flurry')) acts.push(B(300));
    add(n, 'DEFENSIVE', Math.min(5, 1 + Math.floor(i / 5)), ANY, acts);
});

// ═══════════════════════════════════════
// CATEGORY 7: FOOTWORK PATTERNS (151–175)
// ═══════════════════════════════════════
const fwNames = [
    'Step In', 'Step Out', 'Circle Left', 'Circle Right', 'Dash In',
    'Dash Out', 'Angle Step', 'Side Step Jab', 'Advancing Jab', 'Retreating Cross',
    'Pivot Left', 'Pivot Right', 'Ring Cut', 'Smother', 'Push Forward',
    'Quick Retreat', 'Lateral Drift', 'Stalk Walk', 'Chase Down', 'Close Gap',
    'Range Reset', 'Corner Escape', 'Feint Step', 'In-Out', 'Pendulum Step'
];
fwNames.forEach((n, i) => {
    const acts = [];
    const isForward = n.includes('In') || n.includes('Advance') || n.includes('Chase') || n.includes('Close') || n.includes('Push') || n.includes('Stalk') || n.includes('Smother') || n.includes('Cut');
    acts.push(M(isForward ? 1 : -1, 200 + (i % 3) * 100));
    if (n.includes('Jab')) acts.push(P('jab'));
    if (n.includes('Cross')) acts.push(P('cross'));
    if (n.includes('In-Out') || n.includes('Pendulum')) acts.push(W(100), M(-1, 250));
    if (n.includes('Feint')) acts.push(W(50), M(1, 150));
    if (n.includes('Escape')) acts.push(M(-1, 200), M(-1, 200));
    add(n, 'FOOTWORK', Math.min(5, 1 + Math.floor(i / 5)), FAR, acts);
});

// ═══════════════════════════════════════
// CATEGORY 8: PRESSURE PATTERNS (176–200)
// ═══════════════════════════════════════
const pressNames = [
    'Corner Trap', 'Rope Press', 'Walk Down', 'Swarmer Rush', 'Body Attack',
    'Head Hunter', 'Constant Jab', 'Pressure Combo', 'Step-Punch-Step', 'Relentless',
    'Smothering Pressure', 'Clinch Setup', 'Heavy Hands', 'Guard Breaker', 'Overwhelming Force',
    'Non-Stop', 'Suffocate', 'Pinch In', 'Bull Rush', 'Steamroller',
    'Machine Gun', 'Pile Driver', 'Dominator', 'Grinder', 'Crusher'
];
pressNames.forEach((n, i) => {
    const acts = [];
    acts.push(M(1, 200));
    const pTypes = ['jab', 'cross', 'hook', 'uppercut'];
    acts.push(P(pTypes[i % 4]));
    acts.push(W(80));
    acts.push(P(pTypes[(i + 1) % 4]));
    if (i % 3 === 0) acts.push(W(80), P(pTypes[(i + 2) % 4]));
    acts.push(M(1, 150));
    add(n, 'PRESSURE', Math.min(5, 2 + Math.floor(i / 5)), { ...MID, ...HIGH_STA }, acts);
});

// ═══════════════════════════════════════
// CATEGORY 9: ADVANCED PATTERNS (201–225)
// ═══════════════════════════════════════
const advNames = [
    'Jump Jab', 'Jump Cross', 'Jump Hook', 'Air Raid', 'Jump Back Jab',
    'Feint-Cross', 'Feint-Uppercut', 'Feint-Hook', 'Bait Retreat', 'Switch Rush',
    'Level Change', 'Rhythm Break', 'Tempo Shift', 'Stutter Step', 'Flash Combo',
    'Ghost Jab', 'Phantom Cross', 'Shadow Hook', 'Vanish Uppercut', 'Misdirection',
    'Chaos Combo', 'Unpredictable', 'Random Burst', 'Erratic Jab', 'Wild Card'
];
advNames.forEach((n, i) => {
    const acts = [];
    if (n.includes('Jump') || n.includes('Air')) { acts.push(J()); acts.push(W(100)); }
    if (n.includes('Feint') || n.includes('Bait') || n.includes('Ghost') || n.includes('Phantom') || n.includes('Shadow') || n.includes('Vanish') || n.includes('Misdirection')) {
        acts.push(M(1, 100), W(50), M(-1, 100), W(100));
    }
    if (n.includes('Stutter') || n.includes('Rhythm') || n.includes('Tempo')) {
        acts.push(M(1, 80), W(300), M(1, 80));
    }
    const pTypes = ['jab', 'cross', 'hook', 'uppercut'];
    acts.push(P(pTypes[i % 4]));
    if (n.includes('Combo') || n.includes('Rush') || n.includes('Burst') || n.includes('Chaos')) {
        acts.push(W(80), P(pTypes[(i + 1) % 4]), W(80), P(pTypes[(i + 2) % 4]));
    }
    if (n.includes('Back')) acts.push(M(-1, 300));
    add(n, 'ADVANCED', Math.min(5, 3 + Math.floor(i / 8)), ANY, acts);
});

// ═══════════════════════════════════════
// Write output
// ═══════════════════════════════════════
const output = `// ══════════════════════════════════════════════════════════════
//  COMPUTER MOVEMENT DATABASE — AI Fighting Patterns
//  Total Patterns: ${patterns.length}
//  Generated: ${new Date().toISOString().split('T')[0]}
// ══════════════════════════════════════════════════════════════
// Categories: JAB, CROSS, HOOK, UPPERCUT, COMBO, DEFENSIVE,
//             FOOTWORK, PRESSURE, ADVANCED
//
// Each pattern: { id, name, category, difficulty, conditions, actions[] }
// Actions: punch(type), move(dir,dur), block(dur), wait(dur), jump()
// ══════════════════════════════════════════════════════════════

const AI_PATTERNS = ${JSON.stringify(patterns, null, 2)};

// ── Helper: pick a random pattern by category ──
function getPatternsByCategory(cat) {
  return AI_PATTERNS.filter(p => p.category === cat);
}

function getRandomPattern(cat) {
  const pool = cat ? getPatternsByCategory(cat) : AI_PATTERNS;
  return pool[Math.floor(Math.random() * pool.length)];
}

function getPatternForSituation(dist, hpPct, staPct) {
  const suitable = AI_PATTERNS.filter(p => {
    const c = p.conditions;
    if (c.minDist !== undefined && dist < c.minDist) return false;
    if (c.maxDist !== undefined && dist > c.maxDist) return false;
    if (c.maxHpPct !== undefined && hpPct > c.maxHpPct) return false;
    if (c.minStaPct !== undefined && staPct < c.minStaPct) return false;
    if (c.maxStaPct !== undefined && staPct > c.maxStaPct) return false;
    return true;
  });
  if (suitable.length === 0) return getRandomPattern();
  return suitable[Math.floor(Math.random() * suitable.length)];
}
`;

fs.writeFileSync(__dirname + '/patterns.js', output, 'utf-8');
console.log('Generated ' + patterns.length + ' AI patterns -> patterns.js');

// Print summary
const cats = {};
patterns.forEach(p => { cats[p.category] = (cats[p.category] || 0) + 1; });
console.log('\\nCategory breakdown:');
Object.entries(cats).forEach(([k, v]) => console.log('  ' + k + ': ' + v + ' patterns'));
