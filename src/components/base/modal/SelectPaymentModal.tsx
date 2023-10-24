import { useContext, useState } from 'react';
import styled from 'styled-components';
import BaseModal from '@/components/base/modal/BaseModal';
import { WindowContext } from '@/context/window';
import BaseCheckbox from '@/components/base/checkbox/BaseCheckbox';
import FillButton from '@/components/base/button/FillButton';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PopupModal from './PopupModal';
import { setChallenge } from '@/lib/api/axios/challenge/setChallenge';
import { AuthContext } from '@/context/auth';

type Props = {
  id: string;
}

const SelectPaymentModal = ({ id }: Props) => {
  const router = useRouter();
  const [isError, setIsError] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<string>('crypto');
  const { userId } = useContext(AuthContext);
  
  const { 
    modalState, 
    statusCode,
    handleLoadingState,
    handleStatusCode,
    handleModalState } = useContext(WindowContext)
  
  return (
    <BaseModal 
      deletePath={undefined}
      title="You are paying with"
      show={modalState === 'payments' ? true : false}>
      <BoxContainer 
        onClick={() => {
          setPaymentMethod('crypto')
        }}
      >
        <BaseCheckbox
          title='a crypto wallet'
          subTitle='Deposit $USDC to enforce your goals'
          isActive={paymentMethod === 'crypto' ? true : false}
        />
      </BoxContainer>
      <BoxContainer
        onClick={() => {
          setPaymentMethod('free')
        }}
      >
        <BaseCheckbox
          title='free trial'
          subTitle='You can join this challenge with free trial'
          isActive={paymentMethod === 'free' ? true : false}
        />
        </BoxContainer>
        {paymentMethod === 'crypto' && (
          !localStorage.getItem('isWalletConnected') ? (
            <Link href={'/signup/connect'}>
              <MsgContainer $color={'red'}>
                wallet not connected
              </MsgContainer>
            </Link>
          ) : (
          <MsgContainer $color={'blue'}>
            wallet connected
          </MsgContainer>
          ))}
      <ButtonContainer>
        <FillButton 
          title={'Go On'} 
          onClickHandler={async() => {
            if (paymentMethod.length === 0)
              return ;
            if (paymentMethod === 'free') {
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
              }

              if (res?.status === 200 || statusCode === 200) {
                const userChallengeId = res?.data.userChallengeId;
                handleModalState('Success');

                setTimeout(() => {
                  handleModalState(undefined);
                  router.push(`/challenge/my/detail/${userChallengeId}?state=my`);
                }, 3000)
              }
            }
            return ;
          }
          if (!localStorage.getItem('isWalletConnected') && paymentMethod === 'crypto') {
            setIsError(true);
            setTimeout(() => {
              setIsError(false);
              router.push('/signup/connect');
            }, 3000)
          } else {
            handleModalState('deposit')
          }
        }}
        color={'#ffffff'}
        fontSize={17} 
        backgroundcolor={'#000000'}          
      />
      </ButtonContainer>
      {isError && (
        <PopupModal
          title='Move to Wallet Connect'
        />
      )}
    </BaseModal>
  );
};

const BoxContainer = styled.div`
  width: 100%;
  height: auto;

  &:hover {
    cursor: pointer;
  }
`

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

const MsgContainer = styled.div<{
  $color: string
}>`
  color: ${(props) => props.$color};
  font-size: 12px;
  position: absolute;
  bottom: 90px;
  right: 10%;
  text-decoration: underline;
  text-align: right;
`

export default SelectPaymentModal;

