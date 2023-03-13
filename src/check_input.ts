import * as core from '@actions/core'
import * as github from '@actions/github'

core.info('Hello from check_input.ts')

core.info(`action_path: ${process.env['ACTION_PATH']}`)
core.info(`path: ${process.env['GITHUB_PATH']}`)

const jsonStr = JSON.stringify(github.context, null, 2)
core.info('event: ')
core.info(jsonStr)
