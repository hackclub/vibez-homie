import dotenv from 'dotenv'
if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

import app from './server'

import './messages'
import './commands'
import './actions'

import main from './main'; main()
