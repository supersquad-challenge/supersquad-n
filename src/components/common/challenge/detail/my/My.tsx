import Loading from '@/components/animation/Loading/Spinner/Loading';
import LongBlock from '@/components/base/block/LongBlock';
import ProgressBar from '@/components/base/progressbar/ProgressBar';
import CommonError from '@/components/common/error/CommonError';
import { getUserStatus } from '@/lib/api/querys/user/getUserStatus';
import { UserStatus } from '@/types/user/User';
import { convertIsoDateToReadable } from '@/utils/dateFormatUtils';
import { thousandFormat } from '@/utils/moneyFormatUtils';
import React from 'react'
import { useQuery } from 'react-query';
import styled from 'styled-components';

type Props = {
  id: string;
}

const My = ({ id }: Props) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [`my-${id}`],
    queryFn: async () => {
      const res = await getUserStatus({
        userChallengeId: id
      })
      const myStatus: UserStatus = res.myStatus;
      return myStatus;
    },
    staleTime: 5000,
    cacheTime: Infinity
  })

  if (isLoading) {
    return <Loading />
  }
  
  if (!isLoading && (error
    || data === undefined || data === null)) {
    return <CommonError msg="Fetch failed" />;
  }
  
  return (
    <Container>
      <LongBlock
        leftTitle='My Success Rate'
        leftContent={`${thousandFormat(data.successRate)}%`}
        rightTitle='Target Success'
        rightContent={'100%'}
        leftColor='#000000'
        rightColor='#000000'
        leftBackground='#F6F6F6'
        rightBackground='#F6F6F6'
      >
        <ProgressBar
          rate={data.successRate}
        />
      </LongBlock>
      <LongBlock
        leftTitle='Your Deposit'
        leftContent={`$${thousandFormat(data.deposit)}`}
        rightTitle='Availability'
        rightContent={data.challengeEndsAt.length === 0 ? 'None' : convertIsoDateToReadable(data.challengeEndsAt)}
        leftColor='#000000'
        rightColor='#000000'
        leftBackground='#F6F6F6'
        rightBackground='#F6F6F6'
      ></LongBlock>
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  min-width: 250px;
  max-width: 450px;
  margin: 0 auto;
`

export default My