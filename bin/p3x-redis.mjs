#!/usr/bin/env node
const mod = await import('p3x-redis-ui-server/dist/lib/boot.mjs')
const boot = mod.default
boot()
