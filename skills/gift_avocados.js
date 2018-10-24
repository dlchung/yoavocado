module.exports = function(controller) {
    controller.hears([':avocado:'], 'ambient', (bot, message) => {
        // bot.startConversation(message, (err, convo) => {
            // convo.say("I love avocados!")
        // })
        // bot.reply(message, "I love avocados!")

        bot.say({
            text: "You gave an avocado to: ",
            channel: message.event.user
        })
    })
}