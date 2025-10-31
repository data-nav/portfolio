# Design Guidelines: Portfolio Website

## Design Approach
**Reference-Based Approach** - Drawing inspiration from modern portfolio leaders like Awwwards-featured designers, Dribbble showcases, and contemporary creative portfolios. This project demands visual distinction and creative presentation as a personal brand statement.

## Design Principles
1. **Visual-First Storytelling**: Projects and work take center stage immediately
2. **Bold Typography**: Large, confident type establishes personality
3. **Strategic Whitespace**: Breathing room emphasizes quality over quantity
4. **Smooth Interactions**: Subtle, purposeful animations enhance experience without distraction

---

## Typography System

**Primary Font**: Inter or Manrope (Google Fonts)
- Display/Hero: 3xl to 6xl, font-bold (48-72px equivalents)
- Section Headings: 2xl to 4xl, font-semibold
- Subheadings: xl to 2xl, font-medium
- Body Text: base to lg, font-normal
- Captions/Meta: sm to base, font-normal

**Accent Font**: Space Grotesk or Archivo (for section labels, tags)
- All caps for category labels: text-xs to text-sm, tracking-wider, font-semibold

---

## Layout System

**Spacing Scale**: Consistent use of Tailwind units: 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-8 to gap-16
- Element margins: mb-4, mb-6, mb-8 for vertical rhythm

**Container Strategy**:
- Max-width: max-w-7xl for full sections
- Content: max-w-6xl for centered content
- Text blocks: max-w-3xl for readability

---

## Page Structure & Sections

### 1. Opening Impact (Not Traditional Hero)
**Layout**: Full-viewport split-screen or asymmetric introduction
- Left: Large name/title with animated gradient or kinetic typography
- Right: Featured project preview or dynamic visual element
- Floating CTA: "View Work" or "Explore Projects" with subtle hover lift
- Scroll indicator: Minimal animated element

### 2. Featured Projects Grid
**Masonry/Bento Box Layout**: 
- Mixed-size cards: Some full-width, some 2-column, varied heights
- Project cards include: Large preview image, title, tech stack tags, brief description
- Hover state: Gentle scale transform (scale-105), overlay with "View Project" CTA
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 with custom spanning

### 3. About Section
**Two-Column Split** (desktop):
- Column 1: Professional photo or illustrated avatar, social links
- Column 2: Bio paragraph (max-w-2xl), key skills as tag cloud or compact grid
- Stack to single column on mobile

### 4. Skills/Tech Stack
**Badge Grid or Icon Row**:
- Clean, minimal badges/pills for technologies
- Group by category: Frontend, Backend, Tools, etc.
- flex-wrap gap-3 layout, responsive sizing

### 5. Experience/Timeline (Optional based on content)
**Vertical Timeline or Card List**:
- Company/role cards with date ranges
- Achievements as bullet points or highlight cards
- Alternating layout for visual interest

### 6. Contact Section
**Centered CTA Block**:
- Bold headline: "Let's Work Together" or "Get In Touch"
- Primary email/contact button (large, prominent)
- Secondary: Social media icon links in horizontal row
- Background: Subtle gradient or mesh pattern

### 7. Footer
**Minimal Utility Bar**:
- Copyright, quick links (About, Projects, Resume)
- Social icons repeated
- "Back to Top" button (optional)

---

## Component Library

### Navigation
**Fixed/Sticky Header**:
- Logo/Name (left), Navigation links (right)
- Hamburger menu (mobile): Full-screen overlay with large link text
- Background: Backdrop blur (backdrop-blur-md) with transparency
- Links: Underline animation on hover (from center outward)

### Project Cards
**Structure**:
- Image container: aspect-video or aspect-square, overflow-hidden
- Content: p-6 to p-8, absolute positioning for overlay variant
- Tags: Inline flex-wrap with gap-2, small pills
- Interaction: Transform on hover, cursor-pointer

### Buttons/CTAs
**Primary Button**:
- Size: px-8 py-4 (generous padding)
- Typography: text-base to text-lg, font-medium
- Border radius: rounded-lg or rounded-full
- Blurred background when on images: backdrop-blur-md bg-white/20

**Secondary/Ghost Button**:
- Border variant: border-2, transparent fill
- Text-only with arrow icon

### Image Handling
**Hero/Featured Images**:
- Aspect ratios: aspect-video (16:9) for projects, aspect-square for profile
- Object-fit: object-cover to maintain proportions
- Loading: Blur placeholder with smooth fade-in

**Images Section**:
- **Hero Image**: Large opening image (if personality-driven design chosen): Full-width or split-screen, high-quality photo or abstract graphic representing work/personality
- **Project Previews**: 6-12 project screenshots/mockups showcasing variety of work
- **About Photo**: Professional headshot or creative self-portrait
- **Background Elements**: Subtle geometric patterns or gradient meshes for visual interest

### Icons
**Library**: Heroicons (outline style for consistency)
- Navigation: Menu, X (close), Arrow-right
- Social: GitHub, LinkedIn, Twitter, Email envelope
- Skills/Tools: Code bracket, Device mobile, Globe, etc.
- Size: w-5 h-5 to w-6 h-6 standard, w-8 h-8 for emphasis

---

## Responsive Behavior

**Breakpoints**:
- Mobile-first: Base styles for mobile
- md: Tablet adjustments (768px)
- lg: Desktop layouts (1024px)

**Key Adaptations**:
- Navigation: Hamburger below md:
- Grid layouts: Single column → 2-col → 3-col progression
- Typography: Scale down 1-2 sizes on mobile
- Padding: Reduce section padding by ~40% on mobile
- Images: Stack side-by-side layouts vertically

---

## Animation Strategy (Minimal)

**Use Sparingly**:
1. **Page load**: Subtle fade-up for hero content (0.6s ease-out)
2. **Scroll reveals**: Intersection Observer for section fade-ins (stagger by 100ms)
3. **Hover states**: Scale transforms (0.3s), opacity changes
4. **Navigation**: Smooth scroll behavior for anchor links

**Avoid**:
- Parallax effects, complex scroll-driven animations, loading spinners, auto-playing carousels

---

## Accessibility

- All interactive elements: Focus rings (ring-2 ring-offset-2)
- Images: Descriptive alt text for projects
- Contrast: Minimum 4.5:1 for body text, 3:1 for large text
- Keyboard navigation: Tab order follows visual flow
- Form inputs: Visible labels, clear error states

---

## Key Differentiators

This portfolio breaks from generic templates by:
- **Non-standard opening**: No centered hero; immediate visual impact with asymmetry
- **Project-forward**: Work visible within first scroll, not buried
- **Typography confidence**: Large, bold headings establish authority
- **Mixed media layouts**: Varied card sizes create dynamic visual rhythm
- **Purposeful restraint**: Quality over quantity in project selection and presentation

**Final Note**: Every element serves to showcase work and communicate professional identity. Resist generic portfolio patterns—this is a personal brand statement that should feel distinctive and memorable.