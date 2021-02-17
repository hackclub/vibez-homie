package main

import (
  "os"
  "fmt"
  "github.com/go-chat-bot/bot"
  slack "github.com/go-chat-bot/bot/slack"
  goslack "github.com/slack-go/slack"
  _ "github.com/go-chat-bot/plugins/catfacts"
  _ "github.com/go-chat-bot/plugins/catgif"
  _ "github.com/go-chat-bot/plugins/chucknorris"
  // Import all the commands you wish to use
)

func filter(f string, b *bot.User) (string, goslack.PostMessageParameters) {
  mp := goslack.PostMessageParameters {

  }
  return f, mp
}

func main() {
  fmt.Printf("SLACK_TOKEN: %s\n", os.Getenv("SLACK_TOKEN"))
  slack.RunWithFilter(os.Getenv("SLACK_TOKEN"), filter)
}
