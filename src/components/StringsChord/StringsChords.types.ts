import { Chord } from "../PianoChord/PianoChords.types";

export type StringsInstrument = 'guitar'

export interface IStringsChordProps {
  chord?: Chord
  instrument: StringsInstrument
}