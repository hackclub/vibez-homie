module.exports = function vibesHomie(robot) {
  robot.hear(/vibez/i, function(res) {
    return res.send("✌🏾😌🤟🏾")
  })

  // TODO: "radar chart" command
  //  show radar chart on demand as ephemeral

  // TODO: default interaction loop
  //  1.0. remove all root posts
  //    (without links or images like #ship)
  //  1.1. listen for root post adds
  //    add post to airtable for user
  //  1.2. listen for root post deletes
  //    remove post from airtable for user
  //  2.0. update radar chart for user
}
