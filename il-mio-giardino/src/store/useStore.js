import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set) => ({
      hasCompletedOnboarding: false,
      userName: '',
      userExperienceLevel: '', // 'beginner', 'intermediate', 'expert'
      completeOnboarding: (name, level) => set({ hasCompletedOnboarding: true, userName: name, userExperienceLevel: level }),
    }),
    {
      name: 'garden-app-storage',
    }
  )
);
