# Northern Icy SaaS Aesthetic: Design System Plan

## 1. Visual System Objective
To create a high-end, atmospheric SaaS experience that feels "cold," "futuristic," and "elegant." The design mimics the clarity of ice, the depth of arctic skies, and the ethereal glow of aurora lighting.

## 2. Color Palette (Tailwind V4 Theme)
| Role | Color Name | Hex | Description |
| :--- | :--- | :--- | :--- |
| **Background** | `arctic-midnight` | `#020617` | Deep, dark base (Slate 950) |
| **Surface** | `glacial-glass` | `rgba(15, 23, 42, 0.5)` | Translucent, blurred base for cards |
| **Primary** | `ice-blue` | `#7dd3fc` | Bright accent (Sky 300) |
| **Secondary** | `aurora-cyan` | `#22d3ee` | Vibrant glow accent (Cyan 400) |
| **Tertiary** | `aurora-purple` | `#c084fc` | Deep glow accent (Purple 400) |
| **Text Primary** | `frost-white` | `#f8fafc` | Maximum contrast (Slate 50) |
| **Text Secondary** | `arctic-mist` | `#94a3b8` | Subtle text (Slate 400) |
| **Border** | `ice-edge` | `rgba(255, 255, 255, 0.08)` | Ultra-thin glass border |

## 3. Typography & Spacing
- **Font Face:** Inter (System) for clarity, with wide letter-spacing on headings for a "premium" feel.
- **Hierarchy:** Dramatic scale differences. Huge, thin hero headers vs. compact, well-spaced body copy.
- **Spacing:** Generous white space (arctic expanses). Minimum `py-24` for sections to feel "un-cluttered."

## 4. Surface & Elevation Strategy
- **Glassmorphism:** `backdrop-blur-2xl` is mandatory for all cards. 
- **Borders:** `1px` borders with low opacity (`0.08` to `0.1`).
- **Layers:** 
  - Level 0: Arctic Midnight Background.
  - Level 1: Atmospheric Background Glows (Aurora).
  - Level 2: Glacial Glass Surfaces (Cards).
  - Level 3: Content (Text, Icons).

## 5. Background & Lighting Strategy
- **Core Layer: BackgroundBeams:** The primary atmospheric layer will be the existing `BackgroundBeams` component, providing the foundational kinetic energy.
- **Aurora Accents:** Complementary animated radial gradients (Aurora) that harmonize with the beams.
- **Spotlight Effects:** Subtle `radial-gradient` that follows the mouse on glassy cards.
- **Frost Shadows:** Long, soft shadows with a hint of blue (`rgba(125, 211, 252, 0.05)`).

## 6. Component Styling Approach
- **Buttons:** Sharp corners (or minimal `rounded-lg`), subtle gradients, and high-glow hover states.
- **Cards:** Rectangular Bento-style layouts with "locked-in" geometry.
- **Icons:** Thin-stroke Lucide icons with custom ice-blue filters.

## 7. Motion Language
- **Entrance:** Soft fades and staggered "lifts" from bottom.
- **Hover:** Gentle brightness increase and border-glow expansion.
- **Ambient:** Extremely slow-moving background "clouds" of light.

## 8. Implementation Steps
1. Update `@theme` block in `app/css/style.css` with new color variables.
2. Create a `LayoutWrapper` with the atmospheric background system.
3. Redesign the Hero section to set the tone.
4. Implement the Feature Bento Grid with 3D tilt and spotlights.
5. Apply the aesthetic to Pricing and CTA sections.
6. Refine Footer and accessibility.
