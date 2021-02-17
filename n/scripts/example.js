// FIXME: these are just for reference


module.exports = function vibesHomie(robot) {
  //var annoyIntervalId, answer, enterReplies, leaveReplies, lulz

  //robot.respond(/open the (.*) doors/i, function(res) {
  //var doorType;
  //doorType = res.match[1];
  //if (doorType === "pod bay") {
  //return res.reply("I'm afraid I can't let you do that.");
  //} else {
  //return res.reply("Opening " + doorType + " doors");
  //}
  //});

  //robot.hear(/I like pie/i, function(res) {
  //return res.emote("makes a freshly baked pie");
  //});

  //lulz = ['lol', 'rofl', 'lmao'];
  //robot.respond(/lulz/i, function(res) {
  //return res.send(res.random(lulz));
  //});

  //robot.topic(function(res) {
  //return res.send(res.message.text + "? That's a Paddlin'");
  //});

  //enterReplies = ['Hi', 'Target Acquired', 'Firing', 'Hello friend.', 'Gotcha', 'I see you'];
  //leaveReplies = ['Are you still there?', 'Target lost', 'Searching'];
  //robot.enter(function(res) {
  //return res.send(res.random(enterReplies));
  //});
  //robot.leave(function(res) {
  //return res.send(res.random(leaveReplies));
  //});

  //answer = process.env.HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING;
  //robot.respond(/what is the answer to the ultimate question of life/, function(res) {
  //if (answer == null) {
  //res.send("Missing HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING in environment: please set and try again");
  //return;
  //}
  //return res.send(answer + ", but what is the question?");
  //});

  //robot.respond(/you are a little slow/, function(res) {
  //return setTimeout(function() {
  //return res.send("Who you calling 'slow'?");
  //}, 60 * 1000);
  //});

  //annoyIntervalId = null;
  //robot.respond(/annoy me/, function(res) {
  //if (annoyIntervalId) {
  //res.send("AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH");
  //return;
  //}
  //res.send("Hey, want to hear the most annoying sound in the world?");
  //return annoyIntervalId = setInterval(function() {
  //return res.send("AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH");
  //}, 1000);
  //});

  //robot.respond(/unannoy me/, function(res) {
  //if (annoyIntervalId) {
  //res.send("GUYS, GUYS, GUYS!");
  //clearInterval(annoyIntervalId);
  //return annoyIntervalId = null;
  //} else {
  //return res.send("Not annoying you right now, am I?");
  //}
  //});

  //robot.router.post('/hubot/chatsecrets/:room', function(req, res) {
  //var data, room, secret;
  //room = req.params.room;
  //data = JSON.parse(req.body.payload);
  //secret = data.secret;
  //robot.messageRoom(room, "I have a secret: " + secret);
  //return res.send('OK');
  //});

  //robot.error(function(err, res) {
  //robot.logger.error("DOES NOT COMPUTE");
  //if (res != null) {
  //return res.reply("DOES NOT COMPUTE");
  //}
  //});

  //robot.respond(/have a soda/i, function(res) {
  //var sodasHad;
  //sodasHad = robot.brain.get('totalSodas') * 1 || 0;
  //if (sodasHad > 4) {
  //return res.reply("I'm too fizzy..");
  //} else {
  //res.reply('Sure!');
  //return robot.brain.set('totalSodas', sodasHad + 1);
  //}
  //});

  //return robot.respond(/sleep it off/i, function(res) {
  //robot.brain.set('totalSodas', 0);
  //return res.reply('zzzzz');
  //});

}
