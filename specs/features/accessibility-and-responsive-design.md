# Accessibility And Responsive Design Spec

## Purpose

Keep the site understandable and operable across devices and access needs.

## Expected Behavior

- Layouts adapt fluidly from 320px phones through tablets and wide desktops.
- Semantic landmarks, heading order, labels, alt text, and native controls are used.
- Keyboard focus is visible and navigation order follows the visual reading order.
- Text and controls maintain sufficient contrast and comfortable target sizes.
- Decorative motion respects `prefers-reduced-motion`.

## Edge Cases

- Zoomed text, long translations, and unavailable images do not obscure information.
- Horizontal scrolling is not required for page content at supported widths.

## V1 Non-Goals

- Custom accessibility settings that duplicate operating-system preferences.

## Acceptance Criteria

- Core navigation and contact work with keyboard only.
- Pages remain readable at mobile, tablet, and desktop reference widths.
- Reduced motion removes nonessential transitions.

