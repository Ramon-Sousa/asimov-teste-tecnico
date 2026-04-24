# Positivus — Design Specs

Source: [Figma — Asimov Technical Test](https://www.figma.com/design/tGRDGEAFAesHU9gllAwZtt/Asimov---Teste-T%C3%A9cnico)

---

## Colors

| Name  | Hex       | Usage                                      |
|-------|-----------|--------------------------------------------|
| Green | `#B9FF66` | CTA highlights, labels, accents            |
| Dark  | `#191A23` | Backgrounds (dark sections), buttons       |
| Grey  | `#F3F3F3` | Card backgrounds, section backgrounds      |
| Black | `#000000` | Primary text                               |
| White | `#FFFFFF` | Background, text on dark                   |

---

## Typography — Space Grotesk

| Token     | Size  | Weight | Line Height | Usage               |
|-----------|-------|--------|-------------|---------------------|
| H1        | 60px  | 500    | 1           | Hero headline       |
| H1 mob    | 43px  | 500    | 1           | Mobile hero         |
| H2        | 40px  | 500    | 1           | Section headings    |
| H2 mob    | 36px  | 500    | 1           | Mobile section h.   |
| H3        | 30px  | 500    | 1           | Card titles         |
| H3 mob    | 26px  | 500    | 1           | Mobile card titles  |
| H4        | 20px  | 500    | 1           | Nav / sub-labels    |
| H4 mob    | 18px  | 500    | 1           | Mobile H4           |
| Body      | 18px  | 400    | 1           | Paragraphs          |
| Body mob  | 16px  | 400    | 24px        | Mobile paragraphs   |

Font: [Space Grotesk on Google Fonts](https://fonts.google.com/specimen/Space+Grotesk)

---

## Border Radius

| Token     | Value  | Usage                            |
|-----------|--------|----------------------------------|
| `card`    | 45px   | Cards, large containers          |
| `btn`     | 14px   | Buttons, input fields            |
| `tag`     | 7px    | Section heading labels           |

---

## Shadows

| Token    | Value                         | Usage             |
|----------|-------------------------------|-------------------|
| `card`   | `0px 5px 0px 0px #191A23`     | Service cards     |

---

## Spacing

| Token          | Value  | Usage                    |
|----------------|--------|--------------------------|
| Container X    | 100px  | Desktop horizontal pad   |
| Container X mob| 20px   | Mobile horizontal pad    |
| Section gap    | 140px  | Between sections (desk)  |
| Section gap mob| 70px   | Between sections (mob)   |

---

## Component Inventory

### Navbar
- Logo (icon + wordmark)
- Links: About us, Services, Use Cases, Pricing, Blog
- CTA: "Request a quote" — border button `rounded-[14px] border border-dark`
- Mobile: hamburger → full-screen dark overlay menu

### Hero
- H1 headline: 531px wide max
- Body text: 498px wide max
- CTA: "Book a consultation" — dark button
- Illustration: decorative orbital rings + character SVG (desktop only)

### Logotypes Bar
- 6 partner logos: Amazon, Dribbble, HubSpot, Notion, Netflix, Zoom
- `mix-blend-luminosity opacity-80`

### Section Heading (reusable)
- Green pill label (text `#B9FF66 bg`)
- Optional description text (max 580px)

### Service Cards (6 cards, 2-col grid)
- Variants: Grey (`#F3F3F3`) / Green (`#B9FF66`) / Dark (`#191A23`)
- Rounded corners: 45px
- Shadow: `0 5px 0 #191A23`
- Each: 2-line title (label pills) + "Learn more" link + illustration

### CTA Banner
- Grey background card, 347px height (desktop)
- Title + description + "Get your free proposal" button
- Right-side illustration (desktop only)

### Case Studies
- Dark (`#191A23`) rounded box
- 3 case studies separated by vertical dividers
- Each: text + green "Learn more" link

### Working Process (Accordion)
- 6 steps — numbered 01–06
- Green background when open, grey when closed
- Step title in H3 / step number in H1
- + / − toggle button (circular)
- Expanded: divider line + description text

### Team Cards (6 members, 3-col grid)
- White cards, border + shadow
- Avatar: circular, `mix-blend-multiply` + green overlay
- LinkedIn icon top-right
- Divider line between photo and description
- "See all team" dark button (right-aligned)

### Testimonials (Carousel)
- Dark background container
- Single quote bubble (green border)
- Author name in green, role in white
- Navigation: ← dots →

### Contact Form
- Grey background, rounded container
- "Say Hi" / "Get a Quote" radio selector
- Fields: Name, Email*, Message* (textarea)
- "Send Message" dark button (full-width)
- Right illustration (desktop only)

### Footer
- Dark (`#191A23`) background, rounded-top corners
- Logo + nav links + social icons (top row)
- Contact info column + newsletter subscription (middle)
- Divider + copyright + Privacy Policy (bottom)

---

## Illustrations

Source: [Icons8 by Igor Kapustin](https://icons8.com/illustrations/author/5iGu3XwNjbk5)
Source: [Image by vectorjuice on Freepik](https://www.freepik.com/free-vector/pharmaceutical-marketing-abstract-concept-vector-illustration...)
