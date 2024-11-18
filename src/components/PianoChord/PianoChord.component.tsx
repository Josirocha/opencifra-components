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
  const { octavesList, isAssigned } = usePianoChord(props);

  return (
    <div className={pianoChordWrapper}>
      {octavesList.map((_, octaveIndex) => (
        <div className={octaveWrapper}>
          <div className={blackKeysBlockStyle} key={octaveIndex}>
            {BLACK_KEYS.map((key) => (
              <div className={key ? blackKeyStyle.show : blackKeyStyle.hide} key={key}>
                {isAssigned(key as string, octaveIndex) && (
                  <div className={assignedBlackKeyStyle}></div>
                )}
              </div>
            ))}
          </div>

          <div className={whitekeysBlockStyle}>
            {WHITE_KEYS.map((key) => (
              <div className={whiteKeyStyle} key={key}>
                {isAssigned(key, octaveIndex) && (
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
