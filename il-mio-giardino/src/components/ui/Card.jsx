import { twMerge } from 'tailwind-merge';

export function Card({ className, children, ...props }) {
  return (
    <div className={twMerge('bg-white rounded-2xl shadow-sm border border-gray-100 p-4', className)} {...props}>
      {children}
    </div>
  );
}
