import {
  blackKeysBlockStyle,
  blackKeyStyle,
  octaveWrapper,
  pianoChordWrapper,
  whitekeysBlockStyle,
  whiteKeyStyle,
} from "./PianoChord.css";

const whiteKeys = new Array(7).fill(" ");
const blackKeys = [0, 1, 1, 0, 1, 1, 1];
const octaves = [1, 2];

export const PianoChord = () => {
  return (
    <div className={pianoChordWrapper}>
      {octaves.map((octave) => (
        <div className={octaveWrapper}>
          <div className={blackKeysBlockStyle}>
            {blackKeys.map((key) => (
              <div
                className={key == 1 ? blackKeyStyle.show : blackKeyStyle.hide}
              ></div>
            ))}
          </div>

          <div className={whitekeysBlockStyle}>
            {whiteKeys.map(() => (
              <div className={whiteKeyStyle}></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
