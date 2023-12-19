-- CreateEnum
CREATE TYPE "ToolType" AS ENUM ('Base64Encoder', 'Base64ImageEncoder', 'CharacterAndWordCounter', 'ColorConverter', 'DiffViewer', 'HashGenerator', 'JsonValidator', 'LineSortAndDedupe', 'RegexChecker', 'StringConverter', 'UnixTimeConverter', 'UrlParser', 'QrCodeGenerator', 'AsciiConverter');

-- CreateTable
CREATE TABLE "History" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "toolType" "ToolType" NOT NULL,
    "metadata" JSONB NOT NULL,
    "userId" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

