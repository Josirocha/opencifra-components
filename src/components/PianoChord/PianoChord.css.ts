import { style, styleVariants } from "@vanilla-extract/css";

export const pianoChordWrapper = style({
  display: "flex",
});
export const octaveWrapper = style({
  background: "lightgray",
  width: "max-content",
  height: "70px",
  borderBottom: "2px solid #333",

  position: "relative",
});

const keyBase = style({
  height: "100%",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end', paddingBottom: '2px'
})

//white
export const whiteKeyStyle = style([keyBase, {
  width: "16px",
  border: "1px solid #333",
  background: "#fff",
  borderBottom: "3px solid #333",
}]);

export const whitekeysBlockStyle = style({
  display: "flex",
  height: "100%",
});

//Black
export const blackKeyStyle = styleVariants({
  show: [keyBase, {
    width: "10px",
    background: "#333",
    borderBottom: "3px solid #000",
    position: 'relative'
  }],
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

const assignedKeyBase = style({
  borderRadius: '5px',
  border: "1px solid",
})

export const assignedBlackKeyStyle = style([assignedKeyBase, {
  width: "10px",
  height: "9px",
  borderColor: "#333",
  backgroundColor: "white",
  position: 'absolute',
  bottom: '2px'
}]);


export const assignedWhiteKeyStyle = style([assignedKeyBase, {
  width: "9px",
  height: "8px",
  borderColor: "#333",
  backgroundColor: "#333",
}]);
