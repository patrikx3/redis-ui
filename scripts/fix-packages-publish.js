#!/usr/bin/env node

const asyncStart = async () => {

    const mode = process.argv[2]
    const fs = require('fs').promises

    const pkgFile = __dirname + '/../package.json'
    const pkg = JSON.parse((await fs.readFile(pkgFile)).toString())

    switch(mode) {
        case 'flathub-before':
            delete pkg.build.afterAllArtifactBuild
            break;

        default:
            throw new Error(`Unknown mode ${mode}`)
    }

    await fs.writeFile(pkgFile, JSON.stringify(pkg, null, 4))
}


asyncStart()
