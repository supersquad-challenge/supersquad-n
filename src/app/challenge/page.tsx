"use client"
import ChallengeSet from '@/components/common/challenge/unregistered/ChallengeSet';
import { getAllChallenge } from '@/lib/api/querys/challenge/getAllChallenge';
import { useQuery } from 'react-query';
import { AllChallenges } from '@/types/challenge/Challenge';
import Loading from '@/components/animation/Loading/Spinner/Loading';
import styled from 'styled-components';
import CommonError from '@/components/common/error/CommonError';

const Challenge = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['allChallenges'], 
    queryFn: async () => {
      const res = await getAllChallenge();
      const challenges: AllChallenges[] = res.challenges;
      return challenges;
    },
    staleTime: 5000,
    cacheTime: Infinity
  })
  
  if (isLoading) {
    return <Loading />
  }

  if (!isLoading &&  
    (error || data === undefined)) {
    return <CommonError msg="Fetch failed" />;
  }

  return (
    <Container>
      {data.map((challenge: AllChallenges, idx: number) => {
        return (
          <div key={idx}>
            <ChallengeSet
              category={challenge.category}
              endDate={challenge.challengeEndsAt}
              id={challenge.challengeId}
              title={challenge.challengeName}
              participants={challenge.challengeParticipantsCount}
              startDate={challenge.challengeStartsAt}
              thumbnail={challenge.challengeThumbnail}
              deposit={challenge.challengeTotalDeposit}
              isRegistered={false}
            />
          </div>
      )})}
    </Container>
  )
}

const Container = styled.main`
  width: 100%;
  height: auto;
  display: grid;
  grid: '. .';
`

export default Challenge