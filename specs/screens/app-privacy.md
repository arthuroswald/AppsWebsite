# App Privacy Screen Spec

## Purpose

Publish an accurate, understandable privacy commitment for each app.

## Expected Behavior

- Goalzy's policy provides a working contact address without naming an individual.
- It explains that Goalzy has no account, ads, analytics, tracking, or declared data
  collection and does not automatically transmit choices.
- It distinguishes in-memory choices from locally persisted settings, review cadence,
  and decision history.
- It explains what a saved decision contains, the 1,000-result local limit, and the
  user controls for deleting history.
- It explains that result images are generated locally and leave Goalzy only when the
  user selects a destination in the system share sheet.
- It explains the website's functional language preference and hosting caveat.
- A visible last-updated date is present.

## Edge Cases

- The policy avoids unsupported legal guarantees and remains accurate if JavaScript is off.
- Host-level technical processing is not presented as app data collection.

## V1 Non-Goals

- Consent management, privacy request forms, and jurisdiction-specific legal variants.

## Acceptance Criteria

- The policy reflects the audited Goalzy repository and website behavior.
- No analytics, tracking, form, or advertising cookie contradicts the policy.
- French and English versions are equivalent in meaning.
