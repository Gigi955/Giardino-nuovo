# Implementation Plan - Il mio Giardino

Building a mobile-first Progressive Web Application (PWA) tailored for Italian gardening beginners. The app will simulate a native experience with a focus on design, onboarding, and core plant care features.

## User Review Required
> [!NOTE]
> **Mobile App vs Web App**: I will be building this as a **Progressive Web App (PWA)** using React. It will work in the browser and can be installed on the home screen, providing a near-native experience. Native mobile features (complex background notifications, exact GPS) will be approximated using web standards.
> **AI Identification**: The "AI Plant Identification" will be **simulated**. I will build the UI/UX for the camera and analysis, but the result will be selected from the internal database for demonstration purposes (as integrating a real paid AI API is outside basic scope).

## Tech Stack
-   **Framework**: React (Vite)
-   **Styling**: TailwindCSS (custom palette), Framer Motion (animations)
-   **State Management**: Zustand (persisted to localStorage)
-   **Icons**: Lucide-React (modern replacement for Feather)
-   **Charts**: Recharts (for growth graphs)
-   **Routing**: React Router DOM
-   **Date Handling**: date-fns

## Proposed Changes

### Project Structure
-   `src/components/`: Reusable UI atoms (Button, Card, Badge)
-   `src/screens/`: Main page views (Onboarding, Dashboard, PlantDetail)
-   `src/store/`: Zustand stores for `user`, `plants`, `settings`
-   `src/data/`: Static plant database (JSON)
-   `src/lib/`: Utilities (date formatting, care calculators)

### Design System
-   **Colors**:
    -   Primary: `#4CAF50` (Green)
    -   Secondary: `#2E7D32` (Dark Green)
    -   Background: `#F5F5DC` (Beige)
    -   Surface: `#FFFFFF`
-   **Typography**: Inter (Google Fonts)

### Features Breakdown

#### 1. Onboarding
-   **Splash**: Green fade-in with animated leaf.
-   **Slides**: "Trasforma il tuo pollice nero", "Promemoria intelligenti".
-   **Quiz**: Simple form to set user "Level" and "Garden Type".

#### 2. Dashboard
-   **Header**: Dynamic greeting + Weather widget (mocked generic Italian weather or browser Geolocation API if allowed).
-   **Quick Stats**: Cards showing "Plants to water today".
-   **Plant List**: Horizontal scroll or Grid of user's active plants.

#### 3. Plant Database & Add Flow
-   **Database**: `plantsData.ts` containing the requried 12+ species.
-   **Add**: 
    -   Mode 1: Search list.
    -   Mode 2: "Identify" (Camera Overlay -> Mock Analysis -> Result).

#### 4. Plant Profile
-   **Info**: Image, detailed care instructions.
-   **Actions**: "Water Now" button updates the `lastWatered` date in store.
-   **History**: Log of actions.

#### 5. Calendar
-   **View**: Calendar component highlighting days with pending tasks.

## Verification Plan
### Manual Verification
-   **Onboarding**: Complete quiz, check if profile is saved.
-   **Add Plant**: Add "Basilico", check if it appears in Dashboard.
-   **Care Task**: Click "Water", verify due date updates.
-   **Responsiveness**: Use Browser DevTools to test iPhone SE and Pixel dimensions.
