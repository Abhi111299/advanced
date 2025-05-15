-- AlterTable
ALTER TABLE "User" ADD COLUMN     "otp" TEXT,
ADD COLUMN     "otpExpiry" TIMESTAMP(3),
ADD COLUMN     "resetUUID" TEXT,
ADD COLUMN     "resetUUIDExpiry" TIMESTAMP(3);
