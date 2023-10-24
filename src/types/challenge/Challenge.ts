export type AllChallenges = {
  category: string;
  challengeEndsAt: string;
  challengeId: string;
  challengeName: string;
  challengeParticipantsCount: number;
  challengeStartsAt: string;
  challengeStatus: string;
  challengeThumbnail: string;
  challengeTotalDeposit: number;
  challengeVerificationFrequency: string; 
}

export type SingleChallenges = {
  challengeEndsAt: string;
  challengeId: string;
  challengeName: string;
  challengeParticipantsCount: number;
  challengeStartsAt: string;
  challengeThumbnail: string;
  challengeTotalDeposit: number;
  challengeVerificationFrequency: string;
  challengeVerificationMethod: string;
  cryptoYield: number;
  poolAddress: string;
  description: string;
}

export type ParsedDesc = {
  text: string,
  type: 'T' | 'D'
}