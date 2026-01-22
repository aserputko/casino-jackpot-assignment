import { Badge } from '../../components';
import { useGameContext } from '../context';

export const SessionCredits = () => {
  const { game } = useGameContext();

  return (
    <div className='flex justify-end items-center'>
      <Badge variant='default'>Session Credits: {game?.credits ?? 0}</Badge>
    </div>
  );
};
