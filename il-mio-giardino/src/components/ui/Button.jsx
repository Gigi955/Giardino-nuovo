import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Button({ className, variant = 'primary', ...props }) {
  const variants = {
    primary: 'bg-primary text-white hover:bg-secondary shadow-lg shadow-primary/20',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10',
    ghost: 'hover:bg-gray-100 text-gray-700',
  };

  return (
    <button
      className={twMerge(
        'px-4 py-2 rounded-xl font-medium transition-all duration-200 active:scale-95 cursor-pointer flex items-center justify-center gap-2',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
