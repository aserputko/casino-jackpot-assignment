import { Card } from '../../components';
import { useGameContext } from '../context';
import { Slot } from './Slot';

export const Slots = () => {
  const { game } = useGameContext();

  const key = Date.now();

  return (
    <div className='flex flex-row flex-auto gap-4 mb-6'>
      <Card key={`${key}-0`} className='flex-1'>
        <Slot slot={game?.slots[0]} delay={1000} />
      </Card>
      <Card key={`${key}-1`} className='flex-1'>
        <Slot slot={game?.slots[1]} delay={2000} />
      </Card>
      <Card key={`${key}-2`} className='flex-1'>
        <Slot slot={game?.slots[2]} delay={3000} />
      </Card>
    </div>
  );
};
