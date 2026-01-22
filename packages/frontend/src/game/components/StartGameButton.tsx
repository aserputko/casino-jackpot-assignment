import { Button } from '../../components';
import { useGameContext } from '../context';
import { useStartGame } from '../hooks';

export const StartGameButton = () => {
  const { updateGame } = useGameContext();

  const { mutate: createGame } = useStartGame({
    onSuccess: (newGame) => {
      updateGame(newGame);
      //   rollSlots(newGame.id);
    },
  });

  const handleStartGame = () => {
    createGame();
  };

  return (
    <div className='flex justify-center items-center'>
      <Button className='w-[200px] capitalize' size='lg' onClick={handleStartGame}>
        Start Game
      </Button>
    </div>
  );
};
