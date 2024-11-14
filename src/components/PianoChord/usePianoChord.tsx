import { useMemo } from "react";
import { IPianoChordProps } from "./PianoChords.types";
import { CHORDS } from "./constants";

export const usePianoChord = (props: IPianoChordProps) => {
    const { octaves, chord } = props;

    const octavesList = useMemo(() => {
        return new Array(octaves).fill(" ");
    }, [octaves]);

    const currentChord = useMemo(() => {
        if (!chord) return null

        return CHORDS[chord]
    }, [chord])

    return {
        octavesList,
        currentChord
    };
};
