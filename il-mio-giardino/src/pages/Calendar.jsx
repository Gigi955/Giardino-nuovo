import { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
import { it } from 'date-fns/locale';
import { ChevronLeft, ChevronRight, Droplets } from 'lucide-react';

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  // Mock events
  const events = [
    { date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2), type: 'water' },
    { date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5), type: 'water' },
    { date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3), type: 'water' },
  ];

  const days = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate)
  });

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  return (
    <div className='p-6 space-y-6'>
      <header className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold text-gray-800'>Diario</h1>
        <div className='flex gap-2'>
          <button onClick={prevMonth} className='p-2 rounded-full hover:bg-gray-100'><ChevronLeft /></button>
          <button onClick={nextMonth} className='p-2 rounded-full hover:bg-gray-100'><ChevronRight /></button>
        </div>
      </header>

      <div className='bg-white rounded-3xl p-6 shadow-sm border border-gray-100'>
        <h2 className='text-xl font-bold text-gray-800 mb-6 capitalize'>
          {format(currentDate, 'MMMM yyyy', { locale: it })}
        </h2>
        
        <div className='grid grid-cols-7 gap-2 text-center mb-2'>
          {['L', 'M', 'M', 'G', 'V', 'S', 'D'].map(d => (
            <span key={d} className='text-xs font-bold text-gray-400'>{d}</span>
          ))}
        </div>
        
        <div className='grid grid-cols-7 gap-2'>
          {days.map((day, i) => {
            const isToday = isSameDay(day, today);
            const hasEvent = events.find(e => isSameDay(e.date, day));
            
            return (
              <div key={day.toString()} className='aspect-square flex flex-col items-center justify-center relative'>
                <div className={'w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all ' + 
                  (isToday ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'text-gray-700 hover:bg-gray-50')}
                >
                  {format(day, 'd')}
                </div>
                {hasEvent && (
                  <div className='absolute bottom-1 w-1.5 h-1.5 bg-blue-500 rounded-full' />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className='space-y-4'>
        <h3 className='font-bold text-gray-800'>Prossimi Eventi</h3>
        {events.filter(e => e.date >= today).map((e, i) => (
          <div key={i} className='bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4'>
            <div className='w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center'>
              <Droplets className='w-6 h-6 text-blue-500' />
            </div>
            <div>
              <p className='font-bold text-gray-800'>Annaffiatura</p>
              <p className='text-sm text-gray-500 capitalize'>{format(e.date, 'EEEE d MMMM', { locale: it })}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
