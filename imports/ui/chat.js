import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Messages } from '../api/messages.js';

import './chat.js';
import './chat.html';

Template.chat.onCreated(function () {
  this.state = new ReactiveDict();
  Meteor.subscribe('messages');
});

Template.chat.helpers({
  messages() {
    const instance = Template.instance();
    const chatId = FlowRouter.getParam("chatId");

    // Otherwise, return all of the tasks
    return Messages.find({chatId}, { sort: { createdAt: -1 } });
  }
});

Template.chat.events({
  'submit .new-message'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    const chatId = FlowRouter.getParam("chatId");

    // Insert a task into the collection
    Meteor.call('messages.insert', text, chatId);

    // Clear form
    target.text.value = '';
  }
});
