import { RollSlotsButton, SessionCredits, Slots, StartGameButton } from './components';
import { CashOutButton } from './components/CashOutButton';
import { useGameContext } from './context';

export const GamePage = () => {
  const { game } = useGameContext();

  return (
    <>
      <div className='flex flex-col flex-auto container mx-auto gap-4'>
        <h1 className='py-8 border-b border-solid border-gray-300 mb-8'>Slot Machine</h1>
        <SessionCredits />
        <Slots />

        {/* The Start Game Button is shown when the game is not active */}
        {!game?.id && <StartGameButton />}

        {/* The Cash Out & Roll Slots Buttons are shown when the game is active */}
        {game?.id && (
          <div className='flex justify-between items-center'>
            <CashOutButton />
            <RollSlotsButton />
          </div>
        )}
      </div>
    </>
  );
};
