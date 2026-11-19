import styles from './HeroLogo.module.css';

/** Reveal the original brand artwork along its handwriting, once, without
 * replacing the lettering with a font or approximating the logo itself. */
export function HeroLogo() {
  return (
    <div className={styles.logo} aria-hidden="true">
      <svg viewBox="48 6 214 134" focusable="false" className={styles.artwork}>
        <defs>
          <mask id="iel-hero-handwriting" maskUnits="userSpaceOnUse" x="0" y="0" width="312" height="156">
            <g fill="none" stroke="white" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round">
              <path className={styles.stroke} pathLength="1" d="M62 74 L61 102 Q65 116 79 92 Q96 52 91 20 Q88 5 82 30 L77 92 Q90 126 101 92 Q122 48 119 20 Q115 5 109 34 L105 95 Q118 124 127 94" />
              <path className={`${styles.stroke} ${styles.word}`} pathLength="1" d="M137 75 L131 101 Q130 117 143 98 Q150 70 154 106 Q154 84 164 88 Q174 87 166 101 Q161 117 179 98 Q193 77 200 91 Q206 104 189 108 Q179 105 184 93 M217 75 L211 101 Q210 116 226 100 Q242 83 238 91 Q222 93 238 102 Q247 112 229 109 L248 101" />
              <path className={`${styles.stroke} ${styles.tagline}`} pathLength="1" strokeWidth="20" d="M59 128 H250" />
            </g>
          </mask>
        </defs>
        <image href="/brands/illinois-estate-law.png" width="312" height="156" mask="url(#iel-hero-handwriting)" />
        <image className={styles.complete} href="/brands/illinois-estate-law.png" width="312" height="156" />
      </svg>
    </div>
  );
}
