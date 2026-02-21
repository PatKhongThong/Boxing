// ══════════════════════════════════════════════════════════════
//  COMPUTER MOVEMENT DATABASE — AI Fighting Patterns
//  Total Patterns: 225
//  Generated: 2026-02-17
// ══════════════════════════════════════════════════════════════
// Categories: JAB, CROSS, HOOK, UPPERCUT, COMBO, DEFENSIVE,
//             FOOTWORK, PRESSURE, ADVANCED
//
// Each pattern: { id, name, category, difficulty, conditions, actions[] }
// Actions: punch(type), move(dir,dur), block(dur), wait(dur), jump()
// ══════════════════════════════════════════════════════════════

const AI_PATTERNS = [
  {
    "id": 1,
    "name": "Quick Jab",
    "category": "JAB",
    "difficulty": 1,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "wait",
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 2,
    "name": "Double Jab",
    "category": "JAB",
    "difficulty": 1,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 3,
    "name": "Triple Jab",
    "category": "JAB",
    "difficulty": 1,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 4,
    "name": "Pawing Jab",
    "category": "JAB",
    "difficulty": 1,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 5,
    "name": "Step Jab",
    "category": "JAB",
    "difficulty": 1,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 6,
    "name": "Retreat Jab",
    "category": "JAB",
    "difficulty": 2,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "wait",
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 300
      }
    ]
  },
  {
    "id": 7,
    "name": "Flicker Jab",
    "category": "JAB",
    "difficulty": 2,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 8,
    "name": "Body Jab",
    "category": "JAB",
    "difficulty": 2,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 9,
    "name": "Measuring Jab",
    "category": "JAB",
    "difficulty": 2,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 10,
    "name": "Stiff Jab",
    "category": "JAB",
    "difficulty": 2,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 11,
    "name": "Jab-Block",
    "category": "JAB",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "wait",
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "block",
        "duration": 300
      }
    ]
  },
  {
    "id": 12,
    "name": "Jab Feint",
    "category": "JAB",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 13,
    "name": "Up Jab",
    "category": "JAB",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 14,
    "name": "Snap Jab",
    "category": "JAB",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 15,
    "name": "Blinding Jab",
    "category": "JAB",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 16,
    "name": "Jab-Retreat",
    "category": "JAB",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "wait",
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 300
      }
    ]
  },
  {
    "id": 17,
    "name": "Range Finder",
    "category": "JAB",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 18,
    "name": "Jab Pepper",
    "category": "JAB",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 19,
    "name": "Jab Poke",
    "category": "JAB",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 20,
    "name": "Lazy Jab",
    "category": "JAB",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 21,
    "name": "Check Jab",
    "category": "JAB",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "wait",
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 22,
    "name": "Jab Pull",
    "category": "JAB",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 300
      }
    ]
  },
  {
    "id": 23,
    "name": "Jab Slide",
    "category": "JAB",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 24,
    "name": "Step-In Jab",
    "category": "JAB",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 25,
    "name": "Cutting Jab",
    "category": "JAB",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 26,
    "name": "Straight Cross",
    "category": "CROSS",
    "difficulty": 1,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 27,
    "name": "Power Cross",
    "category": "CROSS",
    "difficulty": 1,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 28,
    "name": "Step Cross",
    "category": "CROSS",
    "difficulty": 1,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 250
      },
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 29,
    "name": "Counter Cross",
    "category": "CROSS",
    "difficulty": 1,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 30,
    "name": "Rear Straight",
    "category": "CROSS",
    "difficulty": 2,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 31,
    "name": "Cross-Block",
    "category": "CROSS",
    "difficulty": 2,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "block",
        "duration": 400
      }
    ]
  },
  {
    "id": 32,
    "name": "Lunging Cross",
    "category": "CROSS",
    "difficulty": 2,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 33,
    "name": "Delayed Cross",
    "category": "CROSS",
    "difficulty": 2,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "wait",
        "duration": 400
      },
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 34,
    "name": "Cross Pull",
    "category": "CROSS",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 350
      }
    ]
  },
  {
    "id": 35,
    "name": "Low Cross",
    "category": "CROSS",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 36,
    "name": "Cross Overhand",
    "category": "CROSS",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 37,
    "name": "Snap Cross",
    "category": "CROSS",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 38,
    "name": "Quick Cross",
    "category": "CROSS",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 39,
    "name": "Feint Cross",
    "category": "CROSS",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 40,
    "name": "Heavy Cross",
    "category": "CROSS",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 41,
    "name": "Cross Fade",
    "category": "CROSS",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 350
      }
    ]
  },
  {
    "id": 42,
    "name": "Cross Step-Back",
    "category": "CROSS",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 250
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 350
      }
    ]
  },
  {
    "id": 43,
    "name": "Cross Slide",
    "category": "CROSS",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 44,
    "name": "Darting Cross",
    "category": "CROSS",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 250
      },
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 45,
    "name": "Finishing Cross",
    "category": "CROSS",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 46,
    "name": "Lead Hook",
    "category": "HOOK",
    "difficulty": 2,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "hook"
      }
    ]
  },
  {
    "id": 47,
    "name": "Rear Hook",
    "category": "HOOK",
    "difficulty": 2,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "hook"
      }
    ]
  },
  {
    "id": 48,
    "name": "Check Hook",
    "category": "HOOK",
    "difficulty": 2,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "move",
        "dir": -1,
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      }
    ]
  },
  {
    "id": 49,
    "name": "Shovel Hook",
    "category": "HOOK",
    "difficulty": 2,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "hook"
      }
    ]
  },
  {
    "id": 50,
    "name": "Wide Hook",
    "category": "HOOK",
    "difficulty": 2,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "hook"
      }
    ]
  },
  {
    "id": 51,
    "name": "Tight Hook",
    "category": "HOOK",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "hook"
      }
    ]
  },
  {
    "id": 52,
    "name": "Step Hook",
    "category": "HOOK",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "hook"
      }
    ]
  },
  {
    "id": 53,
    "name": "Hook-Block",
    "category": "HOOK",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "block",
        "duration": 400
      }
    ]
  },
  {
    "id": 54,
    "name": "Double Hook",
    "category": "HOOK",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 150
      },
      {
        "action": "punch",
        "type": "hook"
      }
    ]
  },
  {
    "id": 55,
    "name": "Body Hook",
    "category": "HOOK",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "hook"
      }
    ]
  },
  {
    "id": 56,
    "name": "Hook Uppercut",
    "category": "HOOK",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 57,
    "name": "Leaping Hook",
    "category": "HOOK",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "hook"
      }
    ]
  },
  {
    "id": 58,
    "name": "Counter Hook",
    "category": "HOOK",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "hook"
      }
    ]
  },
  {
    "id": 59,
    "name": "Short Hook",
    "category": "HOOK",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "hook"
      }
    ]
  },
  {
    "id": 60,
    "name": "Long Hook",
    "category": "HOOK",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "hook"
      }
    ]
  },
  {
    "id": 61,
    "name": "Hook Fade",
    "category": "HOOK",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 350
      }
    ]
  },
  {
    "id": 62,
    "name": "Hook Pull",
    "category": "HOOK",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 350
      }
    ]
  },
  {
    "id": 63,
    "name": "Shifting Hook",
    "category": "HOOK",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "hook"
      }
    ]
  },
  {
    "id": 64,
    "name": "Pivot Hook",
    "category": "HOOK",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "move",
        "dir": -1,
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      }
    ]
  },
  {
    "id": 65,
    "name": "KO Hook",
    "category": "HOOK",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "hook"
      }
    ]
  },
  {
    "id": 66,
    "name": "Lead Uppercut",
    "category": "UPPERCUT",
    "difficulty": 2,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 67,
    "name": "Rear Uppercut",
    "category": "UPPERCUT",
    "difficulty": 2,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 68,
    "name": "Step Uppercut",
    "category": "UPPERCUT",
    "difficulty": 2,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 69,
    "name": "Body Uppercut",
    "category": "UPPERCUT",
    "difficulty": 2,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 70,
    "name": "Short Uppercut",
    "category": "UPPERCUT",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 71,
    "name": "Rising Uppercut",
    "category": "UPPERCUT",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 72,
    "name": "Counter Uppercut",
    "category": "UPPERCUT",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 73,
    "name": "Double Uppercut",
    "category": "UPPERCUT",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "wait",
        "duration": 150
      },
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 74,
    "name": "Uppercut-Cross",
    "category": "UPPERCUT",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 75,
    "name": "Uppercut-Hook",
    "category": "UPPERCUT",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      }
    ]
  },
  {
    "id": 76,
    "name": "Sneaky Uppercut",
    "category": "UPPERCUT",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 77,
    "name": "Power Uppercut",
    "category": "UPPERCUT",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 78,
    "name": "Shifting Uppercut",
    "category": "UPPERCUT",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 79,
    "name": "Jump Uppercut",
    "category": "UPPERCUT",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "jump"
      },
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 80,
    "name": "Uppercut Block",
    "category": "UPPERCUT",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "block",
        "duration": 400
      }
    ]
  },
  {
    "id": 81,
    "name": "Quick Uppercut",
    "category": "UPPERCUT",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 82,
    "name": "Uppercut Pull",
    "category": "UPPERCUT",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 350
      }
    ]
  },
  {
    "id": 83,
    "name": "Delayed Uppercut",
    "category": "UPPERCUT",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "wait",
        "duration": 500
      },
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 84,
    "name": "Flash Uppercut",
    "category": "UPPERCUT",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 85,
    "name": "KO Uppercut",
    "category": "UPPERCUT",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 60
    },
    "actions": [
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 86,
    "name": "One-Two",
    "category": "COMBO",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 87,
    "name": "One-Two-Three",
    "category": "COMBO",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 88,
    "name": "One-Two-Body",
    "category": "COMBO",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 89,
    "name": "Triple Threat",
    "category": "COMBO",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 90,
    "name": "Classic Combo",
    "category": "COMBO",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 91,
    "name": "Body Breaker",
    "category": "COMBO",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 92,
    "name": "Flurry Rush",
    "category": "COMBO",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 93,
    "name": "Power Chain",
    "category": "COMBO",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 94,
    "name": "Knockout Combo",
    "category": "COMBO",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 95,
    "name": "Southpaw Special",
    "category": "COMBO",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 96,
    "name": "Blitz Combo",
    "category": "COMBO",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 97,
    "name": "Hook Sandwich",
    "category": "COMBO",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 98,
    "name": "Uppercut Finish",
    "category": "COMBO",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 99,
    "name": "Rapid Fire",
    "category": "COMBO",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 100,
    "name": "Wall Breaker",
    "category": "COMBO",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 101,
    "name": "Staircase",
    "category": "COMBO",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 102,
    "name": "Descending",
    "category": "COMBO",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 103,
    "name": "Pendulum",
    "category": "COMBO",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 104,
    "name": "Double Dutch",
    "category": "COMBO",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 105,
    "name": "Missile Launch",
    "category": "COMBO",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 106,
    "name": "Freight Train",
    "category": "COMBO",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 107,
    "name": "Sniper Burst",
    "category": "COMBO",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 108,
    "name": "Whirlwind",
    "category": "COMBO",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 109,
    "name": "Earthquake",
    "category": "COMBO",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 110,
    "name": "Lightning Rod",
    "category": "COMBO",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 111,
    "name": "Thunder Clap",
    "category": "COMBO",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 112,
    "name": "Viper Strike",
    "category": "COMBO",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 113,
    "name": "Barrage",
    "category": "COMBO",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 114,
    "name": "Destroyer",
    "category": "COMBO",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 115,
    "name": "Fury Fists",
    "category": "COMBO",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 116,
    "name": "Iron Storm",
    "category": "COMBO",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 117,
    "name": "Blinding Speed",
    "category": "COMBO",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 118,
    "name": "Haymaker Chain",
    "category": "COMBO",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 119,
    "name": "Piston Combo",
    "category": "COMBO",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 120,
    "name": "Final Flash",
    "category": "COMBO",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 121,
    "name": "Turtle Guard",
    "category": "DEFENSIVE",
    "difficulty": 1,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 300
      }
    ]
  },
  {
    "id": 122,
    "name": "Peek-a-boo",
    "category": "DEFENSIVE",
    "difficulty": 1,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 400
      }
    ]
  },
  {
    "id": 123,
    "name": "Shell Block",
    "category": "DEFENSIVE",
    "difficulty": 1,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 500
      }
    ]
  },
  {
    "id": 124,
    "name": "Counter Jab",
    "category": "DEFENSIVE",
    "difficulty": 1,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 600
      },
      {
        "action": "wait",
        "duration": 50
      },
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 125,
    "name": "Counter Cross",
    "category": "DEFENSIVE",
    "difficulty": 1,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 300
      },
      {
        "action": "wait",
        "duration": 50
      },
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 126,
    "name": "Counter Hook",
    "category": "DEFENSIVE",
    "difficulty": 2,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 400
      },
      {
        "action": "wait",
        "duration": 50
      },
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 127,
    "name": "Slip Jab",
    "category": "DEFENSIVE",
    "difficulty": 2,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 500
      }
    ]
  },
  {
    "id": 128,
    "name": "Slip Cross",
    "category": "DEFENSIVE",
    "difficulty": 2,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 600
      }
    ]
  },
  {
    "id": 129,
    "name": "Block-Counter",
    "category": "DEFENSIVE",
    "difficulty": 2,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 300
      },
      {
        "action": "wait",
        "duration": 50
      },
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 130,
    "name": "Retreat Block",
    "category": "DEFENSIVE",
    "difficulty": 2,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 400
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 400
      }
    ]
  },
  {
    "id": 131,
    "name": "Block Flurry",
    "category": "DEFENSIVE",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 500
      },
      {
        "action": "block",
        "duration": 300
      }
    ]
  },
  {
    "id": 132,
    "name": "Absorb-Strike",
    "category": "DEFENSIVE",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 600
      }
    ]
  },
  {
    "id": 133,
    "name": "Defensive Jab",
    "category": "DEFENSIVE",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 300
      }
    ]
  },
  {
    "id": 134,
    "name": "Guard Rush",
    "category": "DEFENSIVE",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 400
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      }
    ]
  },
  {
    "id": 135,
    "name": "Block Reset",
    "category": "DEFENSIVE",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 500
      }
    ]
  },
  {
    "id": 136,
    "name": "High Guard",
    "category": "DEFENSIVE",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 600
      }
    ]
  },
  {
    "id": 137,
    "name": "Body Guard",
    "category": "DEFENSIVE",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 300
      }
    ]
  },
  {
    "id": 138,
    "name": "Shoulder Roll",
    "category": "DEFENSIVE",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 400
      }
    ]
  },
  {
    "id": 139,
    "name": "Catch Counter",
    "category": "DEFENSIVE",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 500
      },
      {
        "action": "wait",
        "duration": 50
      },
      {
        "action": "punch",
        "type": "hook"
      }
    ]
  },
  {
    "id": 140,
    "name": "Bait Block",
    "category": "DEFENSIVE",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 600
      }
    ]
  },
  {
    "id": 141,
    "name": "Double Block",
    "category": "DEFENSIVE",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 300
      },
      {
        "action": "block",
        "duration": 300
      }
    ]
  },
  {
    "id": 142,
    "name": "Block Step",
    "category": "DEFENSIVE",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 400
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      }
    ]
  },
  {
    "id": 143,
    "name": "Guard Switch",
    "category": "DEFENSIVE",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 500
      }
    ]
  },
  {
    "id": 144,
    "name": "Defensive Shell",
    "category": "DEFENSIVE",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 600
      }
    ]
  },
  {
    "id": 145,
    "name": "Stand Ground",
    "category": "DEFENSIVE",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 300
      }
    ]
  },
  {
    "id": 146,
    "name": "Pull Counter",
    "category": "DEFENSIVE",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 400
      },
      {
        "action": "wait",
        "duration": 50
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 400
      }
    ]
  },
  {
    "id": 147,
    "name": "Lean Back",
    "category": "DEFENSIVE",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 500
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 400
      }
    ]
  },
  {
    "id": 148,
    "name": "Wall Block",
    "category": "DEFENSIVE",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 600
      }
    ]
  },
  {
    "id": 149,
    "name": "Block Uppercut Counter",
    "category": "DEFENSIVE",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 300
      },
      {
        "action": "wait",
        "duration": 50
      },
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 150,
    "name": "Parry Jab",
    "category": "DEFENSIVE",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "block",
        "duration": 400
      },
      {
        "action": "wait",
        "duration": 50
      },
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 151,
    "name": "Step In",
    "category": "FOOTWORK",
    "difficulty": 1,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      }
    ]
  },
  {
    "id": 152,
    "name": "Step Out",
    "category": "FOOTWORK",
    "difficulty": 1,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": -1,
        "duration": 300
      }
    ]
  },
  {
    "id": 153,
    "name": "Circle Left",
    "category": "FOOTWORK",
    "difficulty": 1,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": -1,
        "duration": 400
      }
    ]
  },
  {
    "id": 154,
    "name": "Circle Right",
    "category": "FOOTWORK",
    "difficulty": 1,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": -1,
        "duration": 200
      }
    ]
  },
  {
    "id": 155,
    "name": "Dash In",
    "category": "FOOTWORK",
    "difficulty": 1,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 300
      }
    ]
  },
  {
    "id": 156,
    "name": "Dash Out",
    "category": "FOOTWORK",
    "difficulty": 2,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": -1,
        "duration": 400
      }
    ]
  },
  {
    "id": 157,
    "name": "Angle Step",
    "category": "FOOTWORK",
    "difficulty": 2,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": -1,
        "duration": 200
      }
    ]
  },
  {
    "id": 158,
    "name": "Side Step Jab",
    "category": "FOOTWORK",
    "difficulty": 2,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": -1,
        "duration": 300
      },
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 159,
    "name": "Advancing Jab",
    "category": "FOOTWORK",
    "difficulty": 2,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": -1,
        "duration": 400
      },
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 160,
    "name": "Retreating Cross",
    "category": "FOOTWORK",
    "difficulty": 2,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": -1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 161,
    "name": "Pivot Left",
    "category": "FOOTWORK",
    "difficulty": 3,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": -1,
        "duration": 300
      }
    ]
  },
  {
    "id": 162,
    "name": "Pivot Right",
    "category": "FOOTWORK",
    "difficulty": 3,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": -1,
        "duration": 400
      }
    ]
  },
  {
    "id": 163,
    "name": "Ring Cut",
    "category": "FOOTWORK",
    "difficulty": 3,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      }
    ]
  },
  {
    "id": 164,
    "name": "Smother",
    "category": "FOOTWORK",
    "difficulty": 3,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 300
      }
    ]
  },
  {
    "id": 165,
    "name": "Push Forward",
    "category": "FOOTWORK",
    "difficulty": 3,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 400
      }
    ]
  },
  {
    "id": 166,
    "name": "Quick Retreat",
    "category": "FOOTWORK",
    "difficulty": 4,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": -1,
        "duration": 200
      }
    ]
  },
  {
    "id": 167,
    "name": "Lateral Drift",
    "category": "FOOTWORK",
    "difficulty": 4,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": -1,
        "duration": 300
      }
    ]
  },
  {
    "id": 168,
    "name": "Stalk Walk",
    "category": "FOOTWORK",
    "difficulty": 4,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 400
      }
    ]
  },
  {
    "id": 169,
    "name": "Chase Down",
    "category": "FOOTWORK",
    "difficulty": 4,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      }
    ]
  },
  {
    "id": 170,
    "name": "Close Gap",
    "category": "FOOTWORK",
    "difficulty": 4,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 300
      }
    ]
  },
  {
    "id": 171,
    "name": "Range Reset",
    "category": "FOOTWORK",
    "difficulty": 5,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": -1,
        "duration": 400
      }
    ]
  },
  {
    "id": 172,
    "name": "Corner Escape",
    "category": "FOOTWORK",
    "difficulty": 5,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": -1,
        "duration": 200
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 200
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 200
      }
    ]
  },
  {
    "id": 173,
    "name": "Feint Step",
    "category": "FOOTWORK",
    "difficulty": 5,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": -1,
        "duration": 300
      },
      {
        "action": "wait",
        "duration": 50
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 174,
    "name": "In-Out",
    "category": "FOOTWORK",
    "difficulty": 5,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 400
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 175,
    "name": "Pendulum Step",
    "category": "FOOTWORK",
    "difficulty": 5,
    "conditions": {
      "minDist": 100,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": -1,
        "duration": 200
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 250
      }
    ]
  },
  {
    "id": 176,
    "name": "Corner Trap",
    "category": "PRESSURE",
    "difficulty": 2,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 177,
    "name": "Rope Press",
    "category": "PRESSURE",
    "difficulty": 2,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 178,
    "name": "Walk Down",
    "category": "PRESSURE",
    "difficulty": 2,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 179,
    "name": "Swarmer Rush",
    "category": "PRESSURE",
    "difficulty": 2,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 180,
    "name": "Body Attack",
    "category": "PRESSURE",
    "difficulty": 2,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 181,
    "name": "Head Hunter",
    "category": "PRESSURE",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 182,
    "name": "Constant Jab",
    "category": "PRESSURE",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 183,
    "name": "Pressure Combo",
    "category": "PRESSURE",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 184,
    "name": "Step-Punch-Step",
    "category": "PRESSURE",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 185,
    "name": "Relentless",
    "category": "PRESSURE",
    "difficulty": 3,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 186,
    "name": "Smothering Pressure",
    "category": "PRESSURE",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 187,
    "name": "Clinch Setup",
    "category": "PRESSURE",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 188,
    "name": "Heavy Hands",
    "category": "PRESSURE",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 189,
    "name": "Guard Breaker",
    "category": "PRESSURE",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 190,
    "name": "Overwhelming Force",
    "category": "PRESSURE",
    "difficulty": 4,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 191,
    "name": "Non-Stop",
    "category": "PRESSURE",
    "difficulty": 5,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 192,
    "name": "Suffocate",
    "category": "PRESSURE",
    "difficulty": 5,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 193,
    "name": "Pinch In",
    "category": "PRESSURE",
    "difficulty": 5,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 194,
    "name": "Bull Rush",
    "category": "PRESSURE",
    "difficulty": 5,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 195,
    "name": "Steamroller",
    "category": "PRESSURE",
    "difficulty": 5,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 196,
    "name": "Machine Gun",
    "category": "PRESSURE",
    "difficulty": 5,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 197,
    "name": "Pile Driver",
    "category": "PRESSURE",
    "difficulty": 5,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 198,
    "name": "Dominator",
    "category": "PRESSURE",
    "difficulty": 5,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 199,
    "name": "Grinder",
    "category": "PRESSURE",
    "difficulty": 5,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 200,
    "name": "Crusher",
    "category": "PRESSURE",
    "difficulty": 5,
    "conditions": {
      "minDist": 40,
      "maxDist": 120,
      "minStaPct": 0.5
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 200
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 150
      }
    ]
  },
  {
    "id": 201,
    "name": "Jump Jab",
    "category": "ADVANCED",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "jump"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 202,
    "name": "Jump Cross",
    "category": "ADVANCED",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "jump"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 203,
    "name": "Jump Hook",
    "category": "ADVANCED",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "jump"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      }
    ]
  },
  {
    "id": 204,
    "name": "Air Raid",
    "category": "ADVANCED",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "jump"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 205,
    "name": "Jump Back Jab",
    "category": "ADVANCED",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "jump"
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 300
      }
    ]
  },
  {
    "id": 206,
    "name": "Feint-Cross",
    "category": "ADVANCED",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 100
      },
      {
        "action": "wait",
        "duration": 50
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 100
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 207,
    "name": "Feint-Uppercut",
    "category": "ADVANCED",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 100
      },
      {
        "action": "wait",
        "duration": 50
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 100
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      }
    ]
  },
  {
    "id": 208,
    "name": "Feint-Hook",
    "category": "ADVANCED",
    "difficulty": 3,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 100
      },
      {
        "action": "wait",
        "duration": 50
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 100
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 209,
    "name": "Bait Retreat",
    "category": "ADVANCED",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 100
      },
      {
        "action": "wait",
        "duration": 50
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 100
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 210,
    "name": "Switch Rush",
    "category": "ADVANCED",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 211,
    "name": "Level Change",
    "category": "ADVANCED",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "punch",
        "type": "hook"
      }
    ]
  },
  {
    "id": 212,
    "name": "Rhythm Break",
    "category": "ADVANCED",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 80
      },
      {
        "action": "wait",
        "duration": 300
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 80
      },
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 213,
    "name": "Tempo Shift",
    "category": "ADVANCED",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 80
      },
      {
        "action": "wait",
        "duration": 300
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 80
      },
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 214,
    "name": "Stutter Step",
    "category": "ADVANCED",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 80
      },
      {
        "action": "wait",
        "duration": 300
      },
      {
        "action": "move",
        "dir": 1,
        "duration": 80
      },
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 215,
    "name": "Flash Combo",
    "category": "ADVANCED",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 216,
    "name": "Ghost Jab",
    "category": "ADVANCED",
    "difficulty": 4,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 100
      },
      {
        "action": "wait",
        "duration": 50
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 100
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 217,
    "name": "Phantom Cross",
    "category": "ADVANCED",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 100
      },
      {
        "action": "wait",
        "duration": 50
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 100
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 218,
    "name": "Shadow Hook",
    "category": "ADVANCED",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 100
      },
      {
        "action": "wait",
        "duration": 50
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 100
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 219,
    "name": "Vanish Uppercut",
    "category": "ADVANCED",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 100
      },
      {
        "action": "wait",
        "duration": 50
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 100
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "hook"
      }
    ]
  },
  {
    "id": 220,
    "name": "Misdirection",
    "category": "ADVANCED",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "move",
        "dir": 1,
        "duration": 100
      },
      {
        "action": "wait",
        "duration": 50
      },
      {
        "action": "move",
        "dir": -1,
        "duration": 100
      },
      {
        "action": "wait",
        "duration": 100
      },
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 221,
    "name": "Chaos Combo",
    "category": "ADVANCED",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "punch",
        "type": "jab"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "cross"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "hook"
      }
    ]
  },
  {
    "id": 222,
    "name": "Unpredictable",
    "category": "ADVANCED",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "punch",
        "type": "cross"
      }
    ]
  },
  {
    "id": 223,
    "name": "Random Burst",
    "category": "ADVANCED",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "punch",
        "type": "hook"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "uppercut"
      },
      {
        "action": "wait",
        "duration": 80
      },
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  },
  {
    "id": 224,
    "name": "Erratic Jab",
    "category": "ADVANCED",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "punch",
        "type": "uppercut"
      }
    ]
  },
  {
    "id": 225,
    "name": "Wild Card",
    "category": "ADVANCED",
    "difficulty": 5,
    "conditions": {
      "minDist": 0,
      "maxDist": 999
    },
    "actions": [
      {
        "action": "punch",
        "type": "jab"
      }
    ]
  }
];

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
