import type { Meta, StoryObj } from '@storybook/react';

import { PianoChord } from './PianoChord.component';
import { CHORDS } from './constants';

const meta = {
  title: 'PianoChord',
  component: PianoChord,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    octaves: { control: 'number' },
    chord: { control: 'select', options: Object.keys(CHORDS)}
  },
} satisfies Meta<typeof PianoChord>;

export default meta;
type Story = StoryObj<typeof meta>;

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