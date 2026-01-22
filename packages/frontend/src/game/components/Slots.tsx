import { Card, CardContent } from '../../components';

type SlotsProps = {
  slots: string[];
};

export const Slots = ({ slots }: SlotsProps) => {
  return (
    <div className='flex flex-row flex-auto gap-4 mb-6'>
      <Card className='flex-1'>
        <CardContent className='flex aspect-square items-center justify-center p-6'>
          <span className='text-6xl font-semibold'>{slots[0] ?? 'X'}</span>
        </CardContent>
      </Card>
      <Card className='flex-1'>
        <CardContent className='flex aspect-square items-center justify-center p-6'>
          <span className='text-6xl font-semibold'>{slots[1] ?? 'X'}</span>
        </CardContent>
      </Card>
      <Card className='flex-1'>
        <CardContent className='flex aspect-square items-center justify-center p-6'>
          <span className='text-6xl font-semibold'>{slots[2] ?? 'X'}</span>
        </CardContent>
      </Card>
    </div>
  );
};
