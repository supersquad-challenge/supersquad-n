"use client"
import Loading from '@/components/animation/Loading/Spinner/Loading';
import ChallengeItem from '@/components/common/challenge/registered/ChallengeItem';
import CommonError from '@/components/common/error/CommonError';
import NoChallenge from '@/components/common/error/NoChallenge';
import { getAllChallengeByUserId } from '@/lib/api/axios/user/getAllChallengeByUserId';
import { UserChallengeInfo } from '@/types/user/User';
import { useQuery } from 'react-query';
import styled from 'styled-components';

const MyChallenge = () => {
  const userId = localStorage.getItem('supersquad');
  const { data, error, isLoading } = useQuery({
    queryKey: ['allMyChallenges'], 
    queryFn: async () => {
      const res = await getAllChallengeByUserId({
        userId: userId || ''
      });
      const userChallenge = res.challengeInfo;
      return userChallenge;
    },
    staleTime: 5000,
    cacheTime: Infinity
  });

  if (isLoading) {
    return <Loading />
  }

  if (!isLoading &&  
    (error || data === undefined)) {
    return <CommonError msg="Fetch failed" />;
  }

  if (!isLoading &&
    (!error && data !== undefined && data.length === 0)) {
      return <NoChallenge />
    }

  return (
    <main>
    <HomeInner>
      {data.map((challenge: UserChallengeInfo, idx: number) => {
        return (
          <div key={idx}>
            <ChallengeItem
              id={challenge.userChallengeId}
              title={challenge.challengeName}
              thumbnailUrl={challenge.challengeThumbnail}
              startDate={challenge.challengeStartsAt}
              endDate={challenge.challengeEndsAt}
              status={challenge.challengeStatus}
              frequency={challenge.challengeVerificationFrequency}
              isRegistered={true}
            />
          </div>
        )})
      }
      </HomeInner>
    </main>
  )
}

const HomeInner = styled.div`
  width: 90%;
  margin: 0 auto;
`

export default MyChallenge