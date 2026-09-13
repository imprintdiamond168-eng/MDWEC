/**
 * FacetGem — a procedurally generated brilliant-cut diamond, drawn as SVG.
 *
 * Tuned for a LIGHT ground: pale prismatic facet fills carried by a crisp
 * steel wireframe, so the stone reads as a technical drawing that happens to
 * refract light — rather than a glowing object on black.
 *
 * Deterministic (no Math.random) so server and client markup match.
 */

type Vec = readonly [number, number];

const C = 100; // centre of the 200x200 viewBox

function polar(r: number, deg: number): Vec {
  const a = (deg * Math.PI) / 180;
  return [C + r * Math.cos(a), C + r * Math.sin(a)];
}

const n = (v: number) => v.toFixed(1);
const pts = (list: Vec[]) => list.map(([x, y]) => `${n(x)},${n(y)}`).join(" ");
/** one <path> beats N <line> elements — roughly half the bytes on the wire */
const seg = (a: Vec, b: Vec) => `M${n(a[0])} ${n(a[1])}L${n(b[0])} ${n(b[1])}`;

export type GemPalette = {
  /** brightest tint (highlight facets) */
  a: string;
  /** mid tint */
  b: string;
  /** deepest tint (pavilion shadow) */
  c: string;
};

export const GEM_PALETTES: Record<string, GemPalette> = {
  ice: { a: "#eaf7fd", b: "#9ed3e8", c: "#2c6f8f" },
  iris: { a: "#f0ecff", b: "#bfb1f0", c: "#5b4aa8" },
  amber: { a: "#fff2df", b: "#f0c993", c: "#a2701f" },
  jade: { a: "#e6f8f1", b: "#a3ded0", c: "#2c7d68" },
  rose: { a: "#fdecf3", b: "#f0b9d0", c: "#9d3f6a" },
  steel: { a: "#eef2f6", b: "#b7c4d0", c: "#3d5567" },
};

type Props = {
  /** unique per instance — SVG defs ids must not collide */
  uid: string;
  sides?: number;
  rotate?: number;
  palette?: GemPalette;
  className?: string;
  sweep?: boolean;
  /**
   * "lite" drops the star facets and the inner spokes. Decorative corner art
   * is rendered at low opacity behind text, so the extra geometry costs bytes
   * without being visible. Defaults to "lite" whenever the sweep is off.
   */
  detail?: "full" | "lite";
};

export default function FacetGem({
  uid,
  sides = 12,
  rotate = -90,
  palette = GEM_PALETTES.ice,
  className,
  sweep = true,
  detail,
}: Props) {
  const lite = (detail ?? (sweep ? "full" : "lite")) === "lite";
  const R_OUT = 92;
  const R_MID = 71;
  const R_TAB = 33;

  const step = 360 / sides;
  const outer = Array.from({ length: sides }, (_, i) => polar(R_OUT, rotate + i * step));
  const mid = Array.from({ length: sides }, (_, i) => polar(R_MID, rotate + (i + 0.5) * step));
  const table = Array.from({ length: sides }, (_, i) => polar(R_TAB, rotate + i * step));

  const at = <T,>(arr: T[], i: number) => arr[((i % arr.length) + arr.length) % arr.length];

  const shade = (i: number, base: number) =>
    base + 0.42 * (0.5 + 0.5 * Math.sin(i * 2.399 + rotate / 57));

  const crown = Array.from({ length: sides }, (_, i) => ({
    p: pts([at(outer, i), at(outer, i + 1), at(mid, i)]),
    o: shade(i, 0.24),
  }));

  const pavilion = Array.from({ length: sides }, (_, i) => ({
    p: pts([at(outer, i), at(mid, i), at(table, i), at(mid, i - 1)]),
    o: shade(i * 3 + 1, 0.16),
  }));

  const star = Array.from({ length: sides }, (_, i) => ({
    p: pts([at(table, i), at(table, i + 1), [C, C] as Vec]),
    o: shade(i * 5 + 2, 0.12),
  }));

  const id = (k: string) => `${uid}-${k}`;

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={id("core")} cx="40%" cy="30%" r="82%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
          <stop offset="40%" stopColor={palette.a} stopOpacity="0.92" />
          <stop offset="76%" stopColor={palette.b} stopOpacity="0.8" />
          <stop offset="100%" stopColor={palette.c} stopOpacity="0.62" />
        </radialGradient>

        <linearGradient id={id("facetA")} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="52%" stopColor={palette.a} />
          <stop offset="100%" stopColor={palette.b} />
        </linearGradient>

        <linearGradient id={id("facetB")} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={palette.c} />
          <stop offset="55%" stopColor={palette.b} />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>

        <linearGradient id={id("sweep")} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="46%" stopColor="#ffffff" stopOpacity="0.45" />
          <stop offset="52%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        <mask id={id("silhouette")}>
          <polygon points={pts(outer)} fill="#fff" />
        </mask>

        <filter id={id("soft")} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* cast shadow — grounds the stone on a light surface */}
      <ellipse
        cx="102"
        cy="176"
        rx="62"
        ry="11"
        fill={palette.c}
        opacity="0.16"
        filter={`url(#${id("soft")})`}
      />

      {/* stone body */}
      <polygon points={pts(outer)} fill={`url(#${id("core")})`} />

      <g mask={`url(#${id("silhouette")})`}>
        {crown.map((f, i) => (
          <polygon
            key={`c${i}`}
            points={f.p}
            fill={`url(#${id(i % 2 ? "facetA" : "facetB")})`}
            opacity={f.o.toFixed(3)}
          />
        ))}
        {pavilion.map((f, i) => (
          <polygon
            key={`p${i}`}
            points={f.p}
            fill={`url(#${id(i % 2 ? "facetB" : "facetA")})`}
            opacity={f.o.toFixed(3)}
          />
        ))}
        {!lite &&
          star.map((f, i) => (
            <polygon
              key={`s${i}`}
              points={f.p}
              fill={`url(#${id(i % 3 ? "facetA" : "facetB")})`}
              opacity={f.o.toFixed(3)}
            />
          ))}

        {sweep && (
          <g className="gem-sweep">
            <rect x="-140" y="-40" width="120" height="280" fill={`url(#${id("sweep")})`} />
          </g>
        )}
      </g>

      {/* facet wireframe — the engineered read */}
      <g fill="none" stroke={palette.c} strokeWidth="0.5" opacity="0.5">
        <polygon points={pts(outer)} strokeWidth="1" opacity="0.95" />
        <polygon points={pts(mid)} opacity="0.8" />
        <polygon points={pts(table)} strokeWidth="0.7" opacity="0.85" />
        <path
          d={outer.map((o, i) => seg(o, at(mid, i)) + seg(o, at(mid, i - 1))).join("")}
        />
        {!lite && (
          <>
            <path
              d={outer.map((o, i) => seg(o, at(table, i))).join("")}
              opacity="0.4"
            />
            <path
              d={table.map((t) => seg(t, [C, C] as Vec)).join("")}
              opacity="0.3"
            />
          </>
        )}
      </g>

      {/* specular points */}
      <polygon points={pts(table)} fill="#ffffff" opacity="0.28" />
      <circle cx="74" cy="64" r="10" fill="#ffffff" opacity="0.85" filter={`url(#${id("soft")})`} />
      <circle cx="124" cy="130" r="5" fill={palette.a} opacity="0.9" filter={`url(#${id("soft")})`} />
    </svg>
  );
}

/** Thin concentric technical rings — a parallax mid-layer / blueprint motif. */
export function TechRings({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true" focusable="false">
      <g fill="none" stroke="#0b1015" strokeWidth="0.6">
        <circle cx="200" cy="200" r="196" opacity="0.07" />
        <circle cx="200" cy="200" r="158" opacity="0.1" strokeDasharray="1 7" />
        <circle cx="200" cy="200" r="120" opacity="0.07" />
        <circle cx="200" cy="200" r="82" opacity="0.1" strokeDasharray="2 10" />
      </g>
      <g stroke="#16455e" strokeWidth="1.2" fill="none" opacity="0.4">
        <path d="M200 4 a196 196 0 0 1 138 57" strokeLinecap="round" />
        <path d="M200 396 a196 196 0 0 1 -138 -57" strokeLinecap="round" />
      </g>
      <g fill="#0b1015" opacity="0.28">
        {Array.from({ length: 48 }, (_, i) => {
          const a = (i / 48) * Math.PI * 2;
          const r = i % 4 === 0 ? 186 : 191;
          const x = 200 + r * Math.cos(a);
          const y = 200 + r * Math.sin(a);
          return (
            <rect
              key={i}
              x={x - 0.6}
              y={y - 0.6}
              width="1.2"
              height={i % 4 === 0 ? 6 : 2.4}
              transform={`rotate(${(i / 48) * 360 + 90} ${x} ${y})`}
            />
          );
        })}
      </g>
    </svg>
  );
}

/** Simplified line-art mark used for the logo. */
export function DiamondMark({ className, gradientId }: { className?: string; gradientId: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3ea6ca" />
          <stop offset="50%" stopColor="#16455e" />
          <stop offset="100%" stopColor="#7c6ad6" />
        </linearGradient>
      </defs>
      <g fill="none" stroke={`url(#${gradientId})`} strokeWidth="1.4">
        <polygon points="20,3 34,13.5 28.6,31 11.4,31 6,13.5" />
        <polygon points="20,11.5 27,16.7 24.3,25 15.7,25 13,16.7" opacity="0.7" />
        <line x1="20" y1="3" x2="20" y2="11.5" opacity="0.55" />
        <line x1="34" y1="13.5" x2="27" y2="16.7" opacity="0.55" />
        <line x1="6" y1="13.5" x2="13" y2="16.7" opacity="0.55" />
        <line x1="28.6" y1="31" x2="24.3" y2="25" opacity="0.55" />
        <line x1="11.4" y1="31" x2="15.7" y2="25" opacity="0.55" />
      </g>
    </svg>
  );
}
