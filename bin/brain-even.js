#!/usr/bin/env node

import { rules, getRound } from '../src/games/even.js';
import getEngine from '../src/index.js';

getEngine(rules, getRound);
