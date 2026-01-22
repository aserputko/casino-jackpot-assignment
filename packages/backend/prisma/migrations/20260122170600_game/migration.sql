-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Started',
    "credits" INTEGER NOT NULL,
    "slots" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
