module.exports = function(controller) {
    controller.hears([':avocado:'], 'ambient', (bot, message) => {
        bot.startConversation(message, (err, convo) => {
            convo.say("I love avocados!")
        })
    })
}