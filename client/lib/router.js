FlowRouter.route('/chats/:chatId', {
    action: function(params, queryParams) {
        BlazeLayout.render("mainlayout", { main: "chat" });
    }
});

FlowRouter.route('/chats', {
    action: function() {
            Meteor.call('chats.insert', function (error, result) {
                FlowRouter.go('/chats/' + result);
        });
    }
});
