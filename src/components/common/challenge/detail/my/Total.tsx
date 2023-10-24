import Loading from '@/components/animation/Loading/Spinner/Loading';
import LongBlock from '@/components/base/block/LongBlock';
import CommonError from '@/components/common/error/CommonError';
import { getTotalStatus } from '@/lib/api/querys/user/getTotalStatus';
import { thousandFormat } from '@/utils/moneyFormatUtils';
import React from 'react'
import { useQuery } from 'react-query';
import styled from 'styled-components';
import ChallengeInfo from '@/components/common/challenge/unregistered/ChallengeInfo';
import { TotalStatus } from '@/types/user/User';

type Props = {
  id: string;
}

const Total = ({ id }: Props) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [`total-${id}`],
    queryFn: async () => {
      const res = await getTotalStatus({
        userChallengeId: id
      })
      const totalStatus: TotalStatus = res.totalStatus;
      return totalStatus;
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
        leftTitle='Total Crypto Deposit'
        leftContent={`$${thousandFormat(data.challengeCryptoDeposit)}`}
        rightTitle='Crypto Yield Boost'
        rightContent={`+%${data.cryptoYieldBoost.toFixed(2)}`}
        leftColor='#000000'
        rightColor='#ffffff'
        leftBackground='#D6C0F0'
        rightBackground='#8A01D7'
      >
      </LongBlock>
      <InfoContainer>
        <ChallengeInfo
          title='Over 80% Pool'
          content={`$${thousandFormat(data.cryptoSuccessPool)}`}
          contentColor='#000000'
          direction='left'
          shadow='rb'
        />
        <ChallengeInfo
          title='Under 80% Pool'
          content={`$${data.cryptoFailPool}`}
          contentColor='#000000'
          direction='right'
          shadow='lb'
        />
      </InfoContainer>
      <LongBlock
        leftTitle='Total Cash Deposit'
        leftContent={`$${thousandFormat(data.challengeCryptoDeposit)}`}
        leftColor='#000000'
        leftBackground='#D6C0F0'
        rightBackground='#D6C0F0'
      >
      </LongBlock>
      <InfoContainer>
        <ChallengeInfo
          title='Over 80% Pool'
          content={`$${thousandFormat(data.cashSuccessPool)}`}
          contentColor='#000000'
          direction='left'
          shadow='rb'
        />
        <ChallengeInfo
          title='Under 80% Pool'
          content={`$${data.cashFailPool}`}
          contentColor='#000000'
          direction='right'
          shadow='lb'
        />
      </InfoContainer>
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  min-width: 250px;
  max-width: 450px;
  margin: 0 auto;
`

const InfoContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`

export default Total;