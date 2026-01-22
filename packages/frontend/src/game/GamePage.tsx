import { Badge, Button, Card, CardContent } from '../components';
import { useCreateGame } from './hooks/useCreateGame';

export const GamePage = () => {
  const { mutate: createGame } = useCreateGame();

  const handleStartGame = () => {
    const data = createGame();
    console.log('Start Game clicked', data);
  };
  return (
    <>
      <div className='flex flex-col flex-auto container mx-auto gap-4'>
        <h1 className='py-8 border-b border-solid border-gray-300 mb-8'>Slot Machine</h1>

        <div className='flex justify-end items-center'>
          <Badge variant='default'>Session Credits: 10</Badge>
        </div>

        <div className='flex flex-row flex-auto gap-4 mb-6'>
          <Card className='flex-1'>
            <CardContent className='flex aspect-square items-center justify-center p-6'>
              <span className='text-6xl font-semibold'>X</span>
            </CardContent>
          </Card>
          <Card className='flex-1'>
            <CardContent className='flex aspect-square items-center justify-center p-6'>
              <span className='text-6xl font-semibold'>X</span>
            </CardContent>
          </Card>
          <Card className='flex-1'>
            <CardContent className='flex aspect-square items-center justify-center p-6'>
              <span className='text-6xl font-semibold'>X</span>
            </CardContent>
          </Card>
        </div>

        <div className='flex justify-end items-center'>
          <Button className='w-[200px] capitalize' size='lg' onClick={handleStartGame}>
            Start Game
          </Button>
        </div>

        <div className='flex justify-between items-center'>
          <Button className='w-[200px] capitalize' size='lg' variant='secondary'>
            Cash Out
          </Button>

          <Button className='w-[200px] capitalize' size='lg'>
            Roll the slots
          </Button>
        </div>
      </div>
    </>
  );
};
