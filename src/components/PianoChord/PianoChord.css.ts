import { style, styleVariants } from "@vanilla-extract/css";

export const pianoChordWrapper = style({
  display: "flex",
  
});
export const octaveWrapper = style({
  background: "lightgray",
  width: "max-content",
  height: "60px",
  borderBottom: "2px solid #333",

  position: "relative"
});

//white
export const whiteKeyStyle = style({
  height: "100%",
  width: "16px",
  border: "1px solid #333",
  background: "#fff",
  borderBottom: "3px solid #333",
});

export const whitekeysBlockStyle = style({
  display: "flex",
  height: "100%",
});

//Blck
export const blackKeyStyle = styleVariants({
  show: {
    height: "100%",
    width: "8px",
    background: "#333",
    borderBottom: "3px solid #000",
},
hide: {
    height: 6,
    width: "8px",
  },
});

export const blackKeysBlockStyle = style({
  display: "flex",
  height: "70%",
  width: "100%",
  position: "absolute",
  justifyContent: "space-around",
  left: "-9px"
});
