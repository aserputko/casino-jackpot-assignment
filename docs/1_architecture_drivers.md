# Architecture Drivers

## Goals

- Build a simple slot machine game online and ensure that the house always wins!

## Functional Requirements 
### Key Usecases
- Start a new Game
- Roll the Slots
    - Roll the Slots with additional business logic
- Stop the Game and cash out

### Actors
- Player

### User Stories

#### US-1: Start a new Game

- When a player starts a game/session, they are allocated 10 credits.
- The game screen has 1 row with 3 blocks.
- The game (session) state has to be kept on the server.
- When a user opens the app, a session is created on the server, and they have 10 starting credits.
- Include a super simple, minimalistic table with 3 blocks in 1 row.
- Include a button next to the table that starts the game.

#### US-2: Rolling the slots

- Pulling the machine lever (rolling the slots) costs 1 credit.
- For players to win the roll, they have to get the same symbol in each block. There are 4 possible symbols:
    - Cherry (10 credits reward)
    - Lemon (20 credits reward)
    - Orange (30 credits reward)
    - Watermelon (40 credits reward)
- The components for each sign can be a starting letter (C for cherry, L for lemon, O for orange, W for watermelon).
- After submitting a roll request to the server, all blocks should enter a spinning state (can be 'X' character spinning).
- After receiving a response from the server:
    - The first sign should spin for 1 second more and then display the result.
    - The second sign should display the result at 2 seconds.
    - The third sign should display the result at 3 seconds.
- If the user wins the round, their session credit is increased by the amount from the server response, otherwise, it is deducted by 1.

#### US-3:  Roll the Slots with additional business logic

- If the player keeps winning, they can play forever
- When a user has less than 40 credits in the game session, their rolls are truly random.
- If a user has between 40 and 60 credits, the server begins to slightly cheat:
    - For each winning roll, before communicating back to the client, the server performs a 30% chance roll which decides if the server will re-roll that round. 
    - If the roll is true, then the server re-rolls and communicates the new result back.
- If the user has above 60 credits, the server acts the same, but the chance of re-rolling the round increases to 60%.

#### US-4: Stop the Game and cash out

- There is a CASH OUT button on the screen
- There is a cash-out endpoint that moves credits from the game session to the user's account and closes the session.

## Non-Functional Requirements

### Quality Arrtibutes
- Usability
    - Super simple UI/UX 
- Maintainability
    - Monorepo approach
    - Clean code, configurable
    - Testable
- Security
    - ???
- Performance
    - ???


## Constraints
- Implement the assignment using any language or framework you feel comfortable with.

## Assumptions
- ???

## Concerns
- ???