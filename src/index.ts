import dotenv from 'dotenv'; dotenv.config()

import app from './server'

import './messages'
import './commands'
import './actions'

import main from './main'; main()
