# App Support Screen Spec

## Purpose

Provide App Store-compatible support information and a working contact method.

## Expected Behavior

- The page shows the app name, support email, expected response context, and concise FAQ.
- Contact uses a standard `mailto:` link and requires no form or backend.
- Users are asked to include app version, device, system version, and reproduction steps.
- Marketing and privacy pages remain reachable.

## Edge Cases

- The email address remains selectable and visible if a mail client cannot open.
- FAQ content remains useful before the app is publicly downloadable.

## V1 Non-Goals

- Ticketing, live chat, file uploads, service status, and guaranteed response times.

## Acceptance Criteria

- App Review and users can find real contact information immediately.
- The page does not collect support data itself.
- French and English versions provide equivalent information.

