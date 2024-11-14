import { BLACK_KEYS, WHITE_KEYS } from "./constants";
import {
  assignedBlackKeyStyle,
  assignedWhiteKeyStyle,
  blackKeysBlockStyle,
  blackKeyStyle,
  octaveWrapper,
  pianoChordWrapper,
  whitekeysBlockStyle,
  whiteKeyStyle,
} from "./PianoChord.css";
import { IPianoChordProps } from "./PianoChords.types";
import { usePianoChord } from "./usePianoChord";

export const PianoChord = (props: IPianoChordProps) => {
  const { octavesList, currentChord } = usePianoChord(props);

  return (
    <div className={pianoChordWrapper}>
      {octavesList.map(() => (
        <div className={octaveWrapper}>
          <div className={blackKeysBlockStyle}>
            {BLACK_KEYS.map((key) => (
              <div className={key ? blackKeyStyle.show : blackKeyStyle.hide}>
                {currentChord?.some((i) => i === key) && (
                  <div className={assignedBlackKeyStyle}></div>
                )}
              </div>
            ))}
          </div>

          <div className={whitekeysBlockStyle}>
            {WHITE_KEYS.map((key) => (
              <div className={whiteKeyStyle}>
                {currentChord?.some((i) => i === key) && (
                  <div className={assignedWhiteKeyStyle}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
