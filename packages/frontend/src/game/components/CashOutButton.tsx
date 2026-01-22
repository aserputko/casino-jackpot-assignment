import { Button } from '../../components';
import { useGameContext } from '../context';
import { useCashOut } from '../hooks';

export const CashOutButton = () => {
  const { game, updateGame } = useGameContext();

  const { mutate: cashOut } = useCashOut({
    onSuccess: () => {
      updateGame(null);
    },
  });

  const handleCashOut = () => {
    cashOut(game!.id);
  };
  return (
    <Button className='w-[200px] capitalize' size='lg' variant='secondary' onClick={handleCashOut}>
      Cash Out
    </Button>
  );
};
