/** Theme tokens for synthetic mock site sections.
 *  Each project (Noir Elan, AURA Clinic, …) provides its own theme so the mocks
 *  inside the BrowserMockup look brand-specific.
 */
export type MockTheme = {
  /** Page background of the mocked site. */
  bg: string;
  /** Primary text color class. */
  text: string;
  /** Muted text class. */
  textMuted: string;
  /** Accent (primary brand) color — bg utility. */
  accentBg: string;
  /** Accent color — text utility. */
  accentText: string;
  /** Border utility for cards / dividers. */
  border: string;
  /** Soft surface for cards. */
  surface: string;
  /** Optional CSS gradient string used in hero (full `background:` value). */
  heroGradient?: string;
  /** Display font family for headings (CSS value). */
  displayFont?: string;
  /** Body font family (CSS value). */
  bodyFont?: string;
};

/** Default fallback theme. Most projects override these. */
export const defaultMockTheme: MockTheme = {
  bg: "bg-[#0E0F12]",
  text: "text-white",
  textMuted: "text-white/60",
  accentBg: "bg-[#C05775]",
  accentText: "text-[#C05775]",
  border: "border-white/[0.08]",
  surface: "bg-white/[0.03]",
  displayFont: "DM Sans, sans-serif",
  bodyFont: "Inter, sans-serif",
};
