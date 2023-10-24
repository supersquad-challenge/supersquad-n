import React, { useContext, useState } from 'react'
import BaseModal from '@/components/base/modal/BaseModal'
import { WindowContext } from '@/context/window'
import { useQuery } from 'react-query';
import { getSingleChallenge } from '@/lib/api/querys/challenge/getSingleChallenge';
import { SingleChallenges } from '@/types/challenge/Challenge';
import Loading from '@/components/animation/Loading/Spinner/Loading';
import CommonError from '@/components/common/error/CommonError';
import SmallBlock from '@/components/base/block/SmallBlock';
import { convertIsoDateToReadable } from '@/utils/dateFormatUtils';
import BaseSlider from '@/components/base/slider/BaseSlider';
import styled from 'styled-components';
import FillButton from '@/components/base/button/FillButton';
import OutlineInput from '@/components/base/input/OutlineInput';
import { setChallenge } from '@/lib/api/axios/challenge/setChallenge';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/auth';
import transfer from '@/lib/transactions/transfer';

type Props = {
  id: string;
}

const ChargeDepositModal = ({ id }: Props) => {
  const { 
    statusCode, 
    modalState,
    handleModalState,
    handleStatusCode,
    handleLoadingState } = useContext(WindowContext);

  const { userId } = useContext(AuthContext);
  const router = useRouter();
  const [ deposit, setDeposit ] = useState<number>(0);

  const { data, error, isLoading } = useQuery({
    queryKey: [`singleChallenge-${id}`],
    queryFn: async() => {
      const res = await getSingleChallenge({ challengeId: id })
      const challenge: SingleChallenges = res.challengeInfo;
      return challenge;
    },
    staleTime: 5000,
    cacheTime: Infinity
  });


  if (isLoading || data === undefined) {
    return <Loading />
  }

  if (!isLoading && (error
    || data === undefined)) {
    return <CommonError msg="Fetch failed" />;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0 || parseInt(e.target.value) < 0)
      setDeposit(0);
    else if (parseInt(e.target.value) > 300)
      setDeposit(300);
    else 
      setDeposit(parseInt(e.target.value));
  };

  return (
    <BaseModal
      deletePath={undefined}
      title="Win Your Goal"
      show={modalState === 'deposit' ? true : false}>
      <BlockContainer>

      <SmallBlock
        leftTitle='Period'
        rightTitle={data.challengeStartsAt.length === 0 ? 'None' : `${convertIsoDateToReadable(data.challengeStartsAt)} - ${convertIsoDateToReadable(data.challengeEndsAt)}`}
        leftColor="#000000"
        rightColor="#000000">
      </SmallBlock>
      <SmallBlock
        leftTitle='Frequency'
        rightTitle={data.challengeVerificationFrequency}
        leftColor="#000000"
        rightColor="#000000">
      </SmallBlock>
      <SmallBlock
        leftTitle='Deposit'
        rightTitle={undefined}
        leftColor="#000000"
        rightColor={undefined}>
          <BaseSlider
            deposit={deposit}
            handleDeposit={handleChange}
          />
      </SmallBlock>
      </BlockContainer>
      <InputContainer>
        <OutlineInput
          placeholder='$USDT'
          updateInput={handleChange}
          submitInput={() => {}}
          currentValue={deposit.toString()}
          color='#000000'
          fontSize={17}
          bordercolor='#cccccc'
        />
        <TickerContainer>
          $MATIC
        </TickerContainer>
      </InputContainer>
      <ButtonContainer>
        <FillButton 
          title={'Charge Deposit'} 
          onClickHandler={async () => {
            const { status, code } = await transfer({ to: data?.poolAddress , value: deposit })
            
            if (!status) {
              handleLoadingState(false);
              handleModalState(`txFailed${code}`);
              setTimeout(() => {
                handleModalState(undefined);
              }, 2000)
              return ;
            }
            handleLoadingState(true);
            if (userId) {
              const res = await setChallenge({
                userId: userId,
                challengeId: id
            })
            handleStatusCode(res?.status);
            handleLoadingState(false);
            if (res?.status === 409 || statusCode === 409) {
              const userChallengeId = res?.data.userChallengeId;
              setTimeout(() => {
                router.push(`/challenge/my/detail/${userChallengeId}?state=my`)
              }, 2500)
              return ;
            }

            if (res?.status === 200 || statusCode === 200) {
              const userChallengeId = res?.data.userChallengeId;
              handleModalState('Success');

              setTimeout(() => {
                handleModalState(undefined);
                router.push(`/challenge/my/detail/${userChallengeId}?state=my`);
              }, 3000)
            }}
          }} 
          color={'#ffffff'} 
          fontSize={17} 
          backgroundcolor={'#000000'}          
        />
      </ButtonContainer>
    </BaseModal>
  )
}

const ButtonContainer = styled.div`
  width: 90%;
  min-width: 300px;
  max-width: 500px;
  font-weight: 500;
  height: 60px;
  border-radius: 20px;
  overflow: hidden;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  &:hover {
    border: 1px solid #000000;
  }
`

const InputContainer = styled.div`
  width: 90%;
  height: 45px;
  margin: 10px auto 0 auto;
  position: relative;
`

const TickerContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 17px;
  font-weight: 400;
  color: #898989;
`

const BlockContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`

export default ChargeDepositModal