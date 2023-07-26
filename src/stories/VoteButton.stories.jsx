import React from 'react';
import VoteButton from '../components/VoteButton';
import '../index.css';

const story = {
  title: 'VoteButton',
  component: VoteButton,
};

export default story;

function TemplateStory(args) {
  return <VoteButton {...args} />;
}

const UpVote = TemplateStory.bind({});
UpVote.args = {
  type: 'up',
  isActive: true,
  count: 1,
};

const DownVote = TemplateStory.bind({});
DownVote.args = {
  type: 'down',
  isActive: false,
  count: 2,
};

export {
  UpVote,
  DownVote,
};
