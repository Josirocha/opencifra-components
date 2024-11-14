import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { PianoChord } from './PianoChord.component';
import { CHORDS } from './constants';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'PianoChord',
  component: PianoChord,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    octaves: { control: 'number' },
    chord: { control: 'select', options: Object.keys(CHORDS)}
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof PianoChord>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TwoOctaves: Story = {
  args: {
    octaves: 2,
  },
};

export const Chord: Story = {
  args: {
    octaves: 1,
    chord: 'C'
  },
};