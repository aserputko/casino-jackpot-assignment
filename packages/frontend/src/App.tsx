import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { GameProvider } from './game/context';
import { GamePage } from './game/GamePage';
import { createQueryClient } from './lib/query';

// Create a client
const queryClient = createQueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GameProvider>
        <GamePage />
      </GameProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
