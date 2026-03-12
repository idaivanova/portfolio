# Ida's Portfolio - Sprint Planning Document

> **Project:** Ida Ivanova Portfolio Website  
> **Version:** 1.0  
> **Last Updated:** March 12, 2026  
> **Status:** Active Development

---

## 1. Executive Summary

### Current State Overview

Ida's portfolio is a React 19 + TypeScript + Tailwind CSS 4 single-page application built with Bun. The project has undergone comprehensive auditing including accessibility compliance, ESLint quality checks, and visual/UX testing. The application features multiple case studies, a design system, and bilingual support (EN/БГ).

### Completed Critical Fixes

The following critical issues have been resolved in previous development cycles:

- **Dependency Resolution:** Added missing `@radix-ui/react-slot` dependency
- **Code Quality:** Fixed all 12 ESLint errors
- **Bundle Optimization:** Optimized icon imports for tree-shaking
- **Cleanup:** Removed unused dev/templates files
- **Component Simplification:** Simplified ScrollToTop component
- **Accessibility Fixes:** Fixed WCAG contrast violations in feature cards
- **Navigation:** Fixed header navigation visibility
- **Case Studies:** Fixed sidebar active states in case study pages

### Remaining Work Estimated in Sprints

| Sprint | Focus Area | Duration | Priority |
|--------|-----------|----------|----------|
| Sprint 2 | Accessibility Compliance | 2 weeks | P0 |
| Sprint 3 | Visual Polish & UX Gaps | 2 weeks | P1 |
| Sprint 4 | Comprehensive Testing | 1 week | P1 |

---

## 2. Sprint 1: Critical Fixes (COMPLETED ✅)

### Status: DONE

All critical fixes from the initial audit have been completed. The following items were addressed and verified:

| Item | Description | Status | Notes |
|------|-------------|--------|-------|
| Missing Dependency | Added @radix-ui/react-slot | ✅ DONE | Required for shadcn/ui components |
| ESLint Errors | Fixed all 12 ESLint errors | ✅ DONE | Code quality now at 100% |
| Icon Imports | Optimized for tree-shaking | ✅ DONE | Reduced bundle size |
| Unused Files | Removed dev/templates files | ✅ DONE | Cleaned up project structure |
| ScrollToTop | Simplified component | ✅ DONE | Reduced complexity |
| Feature Cards | Fixed WCAG contrast violations | ✅ DONE | 4.5:1 ratio achieved |
| Header Navigation | Fixed visibility issues | ✅ DONE | Proper z-index and positioning |
| Case Study Sidebar | Fixed active states | ✅ DONE | Visual feedback working |

### Definition of Done Checklist

- [x] All ESLint errors resolved
- [x] No console errors on page load
- [x] All components render correctly
- [x] Navigation works across all pages
- [x] Accessibility baseline met

---

## 3. Sprint 2: Accessibility Compliance (2 weeks)

### Sprint Goal
Achieve WCAG 2.1 AA compliance across all pages and components.

### Priority: P0

| # | Item | Priority | Acceptance Criteria | Status |
|---|------|----------|---------------------|--------|
| 2.1 | Fix input.tsx focus-visible states | P0 | - Focus ring visible on keyboard navigation<br>- Ring uses design system colors<br>- States: default, focus, error, disabled | ⬜ BACKLOG |
| 2.2 | Fix SDZRNPage heading hierarchy (h4 → h2/h3) | P0 | - All h4 headings converted to h2 or h3<br>- Proper document outline<br>- No skipped heading levels | ⬜ BACKLOG |
| 2.3 | Add icons to badge status variants | P1 | - Visual indicators for all badge types<br>- Consistent icon usage<br>- Icons have aria-hidden="true" | ⬜ BACKLOG |
| 2.4 | Fix color-only indicators in SDZRN page | P0 | - Status indicators have text labels<br>- Icons accompany color changes<br>- 3:1 contrast for graphical objects | ⬜ BACKLOG |
| 2.5 | Add visible focus indicators to non-button interactive elements | P0 | - All interactive elements have focus-visible<br>- Consistent focus style across app<br>- Works in all color modes | ⬜ BACKLOG |
| 2.6 | Implement keyboard navigation overlay test | P1 | - Document keyboard shortcuts<br>- Test all interactive elements<br>- Verify focus trap in modals | ⬜ BACKLOG |

### Acceptance Criteria for Sprint 2

- [ ] All form inputs have visible focus states
- [ ] Heading hierarchy follows proper order (no h4 after h2)
- [ ] All status indicators have text/icon alternatives
- [ ] Keyboard navigation works throughout the application
- [ ] Pass axe-core automated accessibility tests
- [ ] Manual keyboard navigation test passes

### Technical Notes

```typescript
// Example focus-visible implementation
const inputVariants = cva(
  "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  { variants: { variant: { default: "", error: "border-red-500" } } }
);
```

---

## 4. Sprint 3: Visual Polish & UX Gaps (2 weeks)

### Sprint Goal
Fix remaining visual issues and ensure design consistency across all pages.

### Priority: P1

| # | Item | Priority | Acceptance Criteria | Status |
|---|------|----------|---------------------|--------|
| 3.1 | Fix design process diagram image placeholder (Dermatik) | P1 | - Replace placeholder with actual diagram<br>- Ensure responsive scaling<br>- Add alt text describing the process | ⬜ BACKLOG |
| 3.2 | Fix patient journey images (Dermatik) | P1 | - Replace placeholder images<br>- Verify all images load correctly<br>- Check lazy loading implementation | ⬜ BACKLOG |
| 3.3 | Fix company/client logo placeholders (About page) | P1 | - Add actual client logos<br>- Proper sizing and alignment<br>- Fallback for missing logos | ⬜ BACKLOG |
| 3.4 | Verify CV download link styling | P1 | - Consistent button styling<br>- Proper download attribute<br>- Works on mobile devices | ⬜ BACKLOG |
| 3.5 | Test and verify language toggle EN ↔ БГ functionality | P1 | - Toggle switches all content correctly<br>- No untranslated strings<br>- Persists language preference | ⬜ BACKLOG |

### Acceptance Criteria for Sprint 3

- [ ] All placeholder images replaced with actual content
- [ ] No broken images on any page
- [ ] Language toggle works without page reload
- [ ] CV download link functions correctly
- [ ] Visual consistency across all pages

### Visual Checkpoints

1. **Dermatik Case Study**
   - [ ] Design process diagram visible
   - [ ] Patient journey images display correctly
   - [ ] All sections render without layout shifts

2. **About Page**
   - [ ] Client logos display properly
   - [ ] Responsive on mobile
   - [ ] No horizontal scroll

3. **Global**
   - [ ] Language toggle visible and functional
   - [ ] CV download works
   - [ ] No console errors

---

## 5. Sprint 4: Comprehensive Testing (1 week)

### Sprint Goal
Establish robust testing infrastructure and verify all user flows work correctly.

### Priority: P1

| # | Item | Priority | Acceptance Criteria | Status |
|---|------|----------|---------------------|--------|
| 4.1 | Install axe-core for automated a11y testing | P1 | - axe-core integrated into build<br>- Runs on CI pipeline<br>- Generates accessibility report | ⬜ BACKLOG |
| 4.2 | Create comprehensive E2E scenarios for user flows | P1 | - Navigation flow tested<br>- Contact form submission tested<br>- Case study browsing tested | ⬜ BACKLOG |
| 4.3 | Cross-browser testing matrix | P1 | - Safari: Latest<br>- Firefox: Latest<br>- Edge: Latest<br>- No critical errors on any browser | ⬜ BACKLOG |
| 4.4 | Performance audit with Lighthouse CI | P1 | - Lighthouse score > 90<br>- First Contentful Paint < 1.5s<br>- Time to Interactive < 3s | ⬜ BACKLOG |
| 4.5 | Mobile responsive testing on real devices | P2 | - iOS Safari tested<br>- Android Chrome tested<br>- No layout breaks | ⬜ BACKLOG |

### Testing Infrastructure Setup

```bash
# Install axe-core
bun add -D @axe-core/react

# Add to package.json scripts
{
  "scripts": {
    "test:a11y": "bun run test:a11y.ts",
    "test:e2e": "bunx playwright test",
    "test:ci": "bunx playwright test && bun run test:a11y"
  }
}
```

### E2E Test Scenarios

| Scenario | Steps | Expected Result |
|----------|-------|-----------------|
| Homepage Load | 1. Navigate to homepage<br>2. Check hero section<br>3. Verify navigation | Page loads without errors |
| Case Study Navigation | 1. Click case study card<br>2. Navigate through sections<br>3. Check sidebar links | All links work |
| Language Toggle | 1. Click language toggle<br>2. Verify content changes<br>3. Toggle back | Content switches correctly |
| Contact Form | 1. Fill contact form<br>2. Submit form<br>3. Verify success message | Form submits successfully |
| Mobile Navigation | 1. Open on mobile viewport<br>2. Toggle mobile menu<br>3. Navigate to page | Menu works correctly |

### Browser Compatibility Matrix

| Browser | Version | Status | Notes |
|---------|---------|--------|-------|
| Chrome | Latest | ⬜ TEST | |
| Safari | Latest | ⬜ TEST | |
| Firefox | Latest | ⬜ TEST | |
| Edge | Latest | ⬜ TEST | |

### Acceptance Criteria for Sprint 4

- [ ] axe-core runs without errors
- [ ] All E2E scenarios pass
- [ ] No critical errors in any browser
- [ ] Lighthouse performance > 90
- [ ] Mobile testing completed

---

## 6. Long-term Roadmap (Future)

### Priority: P2

These items are planned for future development after core functionality is complete.

| # | Item | Priority | Description | Timeline |
|---|------|----------|-------------|----------|
| 6.1 | Performance optimizations | P2 | - Code splitting per route<br>- Lazy loading for images<br>- Bundle size optimization | Q2 2026 |
| 6.2 | SEO improvements | P2 | - Meta tags for all pages<br>- OpenGraph tags<br>- Sitemap generation | Q2 2026 |
| 6.3 | Analytics integration | P2 | - Page view tracking<br>- User flow analytics<br>- Performance monitoring | Q2 2026 |
| 6.4 | Blog/content system | P3 | - CMS integration<br>- Article listing<br>- Reading time estimates | Q3 2026 |
| 6.5 | Dark mode implementation | P3 | - System preference detection<br>- Manual toggle<br>- Consistent theming | Q3 2026 |

### Performance Targets

| Metric | Current | Target |
|--------|---------|--------|
| Lighthouse Performance | TBD | > 90 |
| First Contentful Paint | TBD | < 1.5s |
| Time to Interactive | TBD | < 3s |
| Bundle Size (gzipped) | TBD | < 150KB |

---

## Definition of Done

### General DoD

- [ ] Code follows project style guide
- [ ] No ESLint errors or warnings
- [ ] TypeScript compiles without errors
- [ ] All tests pass
- [ ] Documentation updated

### Sprint DoD

- [ ] All acceptance criteria met
- [ ] Code reviewed and merged
- [ ] Tested on staging environment
- [ ] No critical bugs
- [ ] Stakeholder sign-off

### Accessibility DoD

- [ ] Passes axe-core automated tests
- [ ] Manual keyboard navigation works
- [ ] Screen reader tested
- [ ] Color contrast meets WCAG AA
- [ ] Focus indicators visible

---

## Quick Reference

### Project Commands

```bash
# Development
bun run dev

# Build
bun run build

# Testing
bun test
bun run test:e2e
bun run test:a11y

# Linting
bun run lint
bun run lint:fix

# Type checking
bun run typecheck
```

### Key Files

| File | Purpose |
|------|---------|
| `src/App.tsx` | Main application component |
| `src/components/` | React components |
| `src/data/` | Static data (projects, content) |
| `design-system/` | Design tokens and utilities |
| `e2e/` | End-to-end tests |

### Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Motion Animation](https://motion.dev)
- [axe-core](https://www.deque.com/axe/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## Appendix: Priority Definitions

| Priority | Description |
|----------|-------------|
| **P0** | Critical - Must fix before release |
| **P1** | High - Should fix in current sprint |
| **P2** | Medium - Fix in next sprint |
| **P3** | Low - Future enhancement |

---

*Document maintained by: Development Team*  
*Next Review: After Sprint 2 Completion*