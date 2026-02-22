# V1 Commit Split Plan

This plan groups current changes into 3 rollback-friendly commits.

## 1) nav: unified left rail + mobile nav UX polish

Files:
- src/App.tsx
- src/components/layout/left-rail-nav.tsx
- src/components/case-studies/CaseStudyLayout.tsx

Suggested commit message:
- feat(nav): unify left rail across routes and add mobile dock/projects sheet

## 2) bee: stabilize bee behavior and messaging

Files:
- src/components/animations/InteractiveBumblebee.tsx
- src/components/animations/Bumblebee.tsx
- src/components/animations/BumblebeeCursor.tsx
- src/components/animations/Raccoon.tsx
- src/components/layout/header.tsx

Suggested commit message:
- fix(bee): unify emoji speech, reduce chatter, and stabilize motion/instance behavior

## 3) archive: move non-v1 experiments to templates

Files:
- src/pages/BuzzPage.tsx (delete)
- src/pages/FlutterPage.tsx (delete)
- src/pages/FlutterFieldsPage.tsx (delete)
- src/data/bumblebee-app.tsx (delete)
- src/data/butterfly-garden.tsx (delete)
- src/data/flutter-fields.tsx (delete)
- src/dev/templates/pages/BuzzPage.tsx (new)
- src/dev/templates/pages/FlutterPage.tsx (new)
- src/dev/templates/pages/FlutterFieldsPage.tsx (new)
- src/dev/templates/data/bumblebee-app.tsx (new)
- src/dev/templates/data/butterfly-garden.tsx (new)
- src/dev/templates/data/flutter-fields.tsx (new)

Suggested commit message:
- chore(archive): move Buzz/Flutter template pages and data to src/dev/templates

## Optional 4) i18n copy polish

Files:
- src/lib/i18n.ts

Suggested commit message:
- docs(i18n): improve translation quality and consistency

## Screenshot artifacts (visual regression)

- artifacts/v1-regression/desktop/*.png
- artifacts/v1-regression/mobile/*.png
