export type TotalStatus = {
  cashFailPool: number;
  cashSuccessPool: number;
  challengeCryptoDeposit: number;
  challengeId: string;
  challengeTotalDeposit: number;
  cryptoFailPool: number;
  cryptoSuccessPool: number;
  cryptoYieldBoost: number;
}

export type UserStatus = {
  userChallengeId: string;
  successRate: number;
  deposit: number;
  challengeStatus: string;
  challengeVerificationFrequency: string;
  challengeStartsAt: string;
  challengeEndsAt: string;
  challengeName: string;
  challengeId: string;
  challengeParticipantsCount: number;
  challengeTotalDeposit: number;
}

export type UserChallengeInfo = {
  userChallengeId: string;
  cashFailPool: number;
  cashSuccessPool: number;
  category: string;
  challengeCashDeposit: number;
  challengeCryptoDeposit: number;
  challengeEndsAt: string;
  challengeMaxParticipants: number;
  challengeName: string;
  challengeParticipantsCount: number;
  challengeRequiredCompleteNum: number;
  challengeStartsAt: string;
  challengeStatus: string;
  challengeThumbnail: string;
  challengeTotalDeposit: number;
  challengeTotalVerificationNum: string;
  challengeVerificationFrequency: string;
  challengeVerificationMethod: string;
  cryptoFailPool: number;
  cryptoSuccessPool: number;
  cryptoYield: number
  defiPool: string;
  description: string;
  joinChallengeEndsAt: string;
  joinChallengeStartsAt: string;
  _v: number;
  _id: string;
}
