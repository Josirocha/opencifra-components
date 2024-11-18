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

// const MINOR_CHORDS: Lista de acordes menores (minor chords).

// const DOMINANT_SEVENTH_CHORDS: Lista de acordes com sétima dominante (dominant seventh chords).

// const MINOR_SEVENTH_CHORDS: Lista de acordes com sétima menor (minor seventh chords).

// const MAJOR_SEVENTH_CHORDS: Lista de acordes com sétima maior (major seventh chords).

// const DIMINISHED_CHORDS: Lista de acordes diminutos (diminished chords).

// const HALF_DIMINISHED_CHORDS: Lista de acordes meio-diminutos (half-diminished chords).

// const AUGMENTED_CHORDS: Lista de acordes aumentados (augmented chords).

// const FLAT_FIFTH_CHORDS: Lista de acordes com quinta bemol (flat fifth chords).

// const SHARP_FIFTH_CHORDS: Lista de acordes com quinta aumentada (sharp fifth chords).

// const SUSPENDED_CHORDS: Lista de acordes suspensos (suspended chords).

export const CHORDS = {
    ...MAJOR_CHORDS,
};
