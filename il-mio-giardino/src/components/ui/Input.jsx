import { twMerge } from 'tailwind-merge';

export function Input({ className, ...props }) {
  return (
    <input
      className={twMerge(
        'w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-200 bg-gray-50 focus:bg-white',
        className
      )}
      {...props}
    />
  );
}
