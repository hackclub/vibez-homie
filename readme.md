# vibez-homie (slack app and bot)

`#vibez` `@vibez-homie`

## here's how it works

- user interaction / feedback loop
  - one may (MUST) include link to song or image that further describe how one feels
  - the threaded comments on root posts
    - are for discussion of the root post that they're threaded to
    - are to be moderated with care and respect for the root poster's feelings
  - generally:
    - remove all non-conformant root posts
    - listen for root post adds and deletes
    - write to airtable for a user's posts
    - maybe pre-generate radar charts
    - FIXME: ?_? more to come here

- a bot will privately post an image that tracks your feelings over time as you make root posts
  - this will be posted in the thread of your root post, but only you may see it
  - if you so desire, you may click a button to replace the private bot reply with a bot reply that everyone can see
    - a radar chart (like from the gameboy advance pokemon games)

- a bot will be available to query your vibes within #vibez
  - one may delete their vibes history selectively or wipe the entire history for their user
  - one may NOT edit their vibes

- ideas for slash commads
  - /vibez radar
  - /vibez radar-all
  - /help
  - /?

## todo

- [ ] welcome message to new users
- [ ] help command for the bot
- [ ] user interaction loop
- [ ] store vibez data properly in airtable
- [ ] generate radar charts for users as we go or on demand
- [ ] show radar chart on demand and when user posts
- [ ] show radar chart for the entire channel's previous time period (24hr?)

### Magic

- https://www.npmjs.com/package/svg-radar-chart
- https://www.npmjs.com/package/radar-chart-d3

- https://www.npmjs.com/package/wordpos
- https://kylestetz.github.io/Sentencer/

- https://github.com/hackclub/coastguard
- https://github.com/hackclub/scrappy

- @sampoder wants to do a scrapbook integration.. one can already share posts to scrapbook. maybe an ephemeral message should do that for your radar chart?
