// Optical alignment of an eyebrow and the heading under it.
//
// Every letter is drawn a little to the right of where its box starts, and
// by a different amount in each font and for each letter: an M in the
// heading font starts 0.066 of the font size in (3px at 48px), an A almost
// at the edge, and the small eyebrow text about 1px in. Set one above the
// other, the two first letters therefore start in slightly different
// places. opticalStart() returns the small negative margin that brings the
// first letter's ink to the edge of the box, so that both lines start on
// the same vertical.
//
// The figures are the fonts' own (the gap to the left of each capital, as
// a fraction of the font size), measured in the browser for Space Grotesk
// (headings; the same at weights 700 and 800) and Inter (eyebrows, 500).
// Headings and eyebrows are set in capitals, so only capitals and digits
// are listed.

const DISPLAY: Record<string, number> = {
  A: 0.018, B: 0.046, C: 0.05, D: 0.046, E: 0.066, F: 0.066, G: 0.05,
  H: 0.066, I: 0.066, J: 0.032, K: 0.066, L: 0.066, M: 0.066, N: 0.066,
  O: 0.05, P: 0.066, Q: 0.05, R: 0.066, S: 0.034, T: 0.024, U: 0.062,
  V: 0.018, W: 0.03, X: 0.022, Y: 0.008, Z: 0.046,
  "0": 0.05, "1": 0.012, "2": 0.042, "3": 0.034, "4": 0.026, "5": 0.038,
  "6": 0.05, "7": 0.026, "8": 0.028, "9": 0.04,
};

const SANS: Record<string, number> = {
  A: 0.025, B: 0.081, C: 0.055, D: 0.081, E: 0.081, F: 0.081, G: 0.055,
  H: 0.081, I: 0.081, J: 0.044, K: 0.081, L: 0.081, M: 0.081, N: 0.081,
  O: 0.055, P: 0.081, Q: 0.055, R: 0.081, S: 0.052, T: 0.044, U: 0.081,
  V: 0.025, W: 0.025, X: 0.027, Y: 0.025, Z: 0.058,
};

/**
 * Inline style for a heading ("display") or an eyebrow ("sans") so that its
 * first letter starts exactly at the left edge. Accents are ignored (Á is
 * treated as A); for a character that is not listed nothing is changed.
 */
export function opticalStart(
  text: string | undefined,
  font: "display" | "sans",
): string | undefined {
  const first = text
    ?.trim()
    .charAt(0)
    .normalize("NFD")
    .charAt(0)
    .toUpperCase();
  const gap = first ? (font === "display" ? DISPLAY : SANS)[first] : undefined;
  return gap ? `margin-left:-${gap}em` : undefined;
}
