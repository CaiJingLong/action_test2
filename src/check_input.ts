import * as core from '@actions/core'

core.info('Hello from check_input.ts')

core.info(`action_path: ${process.env['ACTION_PATH']}`)
core.info(`path: ${process.env['GITHUB_PATH']}`)
