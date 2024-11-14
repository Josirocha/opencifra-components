import { style, styleVariants } from "@vanilla-extract/css";

export const pianoChordWrapper = style({
  display: "flex",
});
export const octaveWrapper = style({
  background: "lightgray",
  width: "max-content",
  height: "60px",
  borderBottom: "2px solid #333",

  position: "relative",
});

//white
export const whiteKeyStyle = style({
  height: "100%",
  width: "16px",
  border: "1px solid #333",
  background: "#fff",
  borderBottom: "3px solid #333",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  paddingBottom: '2px'
});

export const whitekeysBlockStyle = style({
  display: "flex",
  height: "100%",
});

//Blck
export const blackKeyStyle = styleVariants({
  show: {
    height: "100%",
    width: "10px",
    background: "#333",
    borderBottom: "3px solid #000",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: '2px',
    position: 'relative'
  },
  hide: {
    height: 6,
    width: "10px",
  },
});

export const blackKeysBlockStyle = style({
  display: "flex",
  height: "70%",
  width: "100%",
  position: "absolute",
  justifyContent: "space-around",
  left: "-9px",
});

export const assignedBlackKeyStyle = style({
  width: "10px",
  height: "9px",
  border: "1px solid #333",
  backgroundColor: "white",
  borderRadius: '5px',
  position: 'absolute',
  bottom: '2px'

});

export const assignedWhiteKeyStyle = style({
  width: "8px",
  height: "8px",
  border: "1px solid #333",
  backgroundColor: "#333",
  borderRadius: '5px'
});
