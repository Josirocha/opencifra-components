export const WHITE_KEYS = ["C", "D", "E", "F", "G", "A", "B"];
export const BLACK_KEYS = [0, "C#", "D#", 0, "F#", "G#", "A#"];

const MAJOR_CHORDS = {
    C: [{ key: "C", octave: 0 }, { key: "E", octave: 0 }, { key: "G", octave: 0 }],
    D: [{ key: "D", octave: 0 }, { key: "F#", octave: 0 }, { key: "A", octave: 0 }],
    E: [{ key: "E", octave: 0 }, { key: "G#", octave: 0 }, { key: "B", octave: 0 }],
    F: [{ key: "F", octave: 0 }, { key: "A", octave: 0 }, { key: "C", octave: 1 }],
    G: [{ key: "G", octave: 0 }, { key: "B", octave: 0 }, { key: "D", octave: 1 }],
    A: [{ key: "A", octave: 0 }, { key: "C#", octave: 1 }, { key: "E", octave: 1 }],
    B: [{ key: "B", octave: 0 }, { key: "D#", octave: 1 }, { key: "F#", octave: 1 }]
}

export const CHORDS = {
    ...MAJOR_CHORDS,
};
