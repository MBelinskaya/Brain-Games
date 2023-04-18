#!/usr/bin/env node

import { getRound, rules } from '../src/games/prime.js';
import getEngine from '../src/index.js';

getEngine(rules, getRound);