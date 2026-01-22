import { useEffect, useState } from 'react';
import { CardContent } from '../../components';
import { cn } from '../../lib/utils';

type SlotProps = {
  slot?: string;
  delay: number;
};

export const Slot = ({ slot, delay }: SlotProps) => {
  const [displayedSlot, setDisplayedSlot] = useState<string>('X');

  useEffect(() => {
    setDisplayedSlot('X');

    const timer = setTimeout(() => {
      setDisplayedSlot(slot ?? 'X');
    }, delay);

    return () => clearTimeout(timer);
  }, [slot, delay]);

  return (
    <CardContent className={cn('flex aspect-square items-center justify-center p-6 ')}>
      <span className={cn('text-6xl font-semibold')}>{displayedSlot}</span>
    </CardContent>
  );
};
