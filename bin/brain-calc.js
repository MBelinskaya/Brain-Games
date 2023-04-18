#!/usr/bin/env node

import { getRound, rules } from '../src/games/calc.js';
import getEngine from '../src/index.js';

getEngine(rules, getRound);
