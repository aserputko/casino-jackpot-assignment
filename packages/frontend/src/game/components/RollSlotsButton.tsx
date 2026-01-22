import { Button } from '../../components';
import { useGameContext } from '../context';
import { useRollSlots } from '../hooks';

export const RollSlotsButton = () => {
  const { game, updateGame } = useGameContext();

  const { mutate: rollSlots } = useRollSlots({
    onSuccess: (updatedGame) => {
      updateGame(updatedGame);
    },
  });

  const handleRollSlots = () => {
    rollSlots(game!.id);
  };

  return (
    <Button className='w-[200px] capitalize' size='lg' onClick={handleRollSlots}>
      Roll the slots
    </Button>
  );
};
