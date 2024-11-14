import { CHORDS } from "./constants";

export type Chord = keyof typeof CHORDS

export interface IPianoChordProps {
    octaves: number;
    chord?: Chord
}