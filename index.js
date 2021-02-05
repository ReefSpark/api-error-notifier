const { IncomingWebhook } = require('@slack/webhook')

module.exports = (webHookUrl, type, error) => {
    try {

        const url = webHookUrl;
        const webhook = new IncomingWebhook(url);
        // Send the notification
        (async () => {
            await webhook.send({
                text: `*${type} Error Notification*\n\n Date: \`${new Date()}\`\nError: \`${error}\``
            });
        })();
        return { status: true }
    }
    catch (err) {
        return { status: false, error: err.message }
    }
}