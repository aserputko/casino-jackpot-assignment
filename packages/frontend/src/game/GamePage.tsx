import { useState } from 'react';
import { Button } from '../components';
import { SessionCredits, Slots } from './components';
import { useCreateGame } from './hooks/useCreateGame';

export const GamePage = () => {
  const [game, setGame] = useState<any>(null);

  const { mutate: createGame } = useCreateGame((game) => {
    setGame(game);
  });

  const handleStartGame = () => {
    createGame();
  };
  return (
    <>
      <div className='flex flex-col flex-auto container mx-auto gap-4'>
        <h1 className='py-8 border-b border-solid border-gray-300 mb-8'>Slot Machine</h1>

        <SessionCredits credits={game?.credits} />

        <Slots slots={game?.slots || []}></Slots>

        {!game?.id && (
          <div className='flex justify-center items-center'>
            <Button className='w-[200px] capitalize' size='lg' onClick={handleStartGame}>
              Start Game
            </Button>
          </div>
        )}

        {game?.id && (
          <div className='flex justify-between items-center'>
            <Button className='w-[200px] capitalize' size='lg' variant='secondary'>
              Cash Out
            </Button>

            <Button className='w-[200px] capitalize' size='lg'>
              Roll the slots
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
