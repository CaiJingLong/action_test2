import * as core from '@actions/core'
import * as github from '@actions/github'
import * as fs from 'fs'

core.info('Hello from check_input.ts')

core.info(`action_path: ${process.env['ACTION_PATH']}`)
core.info(`path: ${process.env['GITHUB_PATH']}`)

const jsonStr = JSON.stringify(github.context, null, 2)
core.info('event: ')
core.info(jsonStr)

core.info(`GITHUB_OUTPUT: ${process.env['GITHUB_OUTPUT']}`)

fs.appendFileSync(process.env['GITHUB_OUTPUT'] || '', '\nINSTALL_DART=1')
