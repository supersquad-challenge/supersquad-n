"use client"
import styled from 'styled-components';
import React, { useContext } from 'react'
import ChallengeDetail from '@/components/common/challenge/detail/ChallengeDetail';
import { usePathname } from 'next/navigation';
import { WindowContext } from '@/context/window';
import SelectPaymentModal from '@/components/base/modal/SelectPaymentModal';
import ChargeDepositModal from '@/components/base/modal/ChargeDepositModal';
import SuccessModal from '@/components/base/modal/SuccessModal';
import PopupModal from '@/components/base/modal/PopupModal';

const Challenge = () => {
  const path = usePathname();
  const id = path.split('/')[3];
  const { modalState } = useContext(WindowContext);


  return (
    <PageContainer>
      <ChallengeDetail
        id={id}
      />
      {modalState === 'payments' && (
        <SelectPaymentModal
          id={id}
        />
      )}
      {modalState === 'deposit' && (
        <ChargeDepositModal
          id={id}
        />
      )}
      {modalState === 'Success' && (
        <SuccessModal
          title='Now you are in!'
          detail='Be ready to enforce your goal'
          buttonTitle='Go to My Challenge'
        />
      )}
      {modalState === 'txFailed1' && (
        <PopupModal
          title='Missing ChainID'
        />
      )}
      {modalState === 'txFailed2' && (
        <PopupModal
          title='Transaction Failed'
        />
      )}
    </PageContainer>
  )
}

const PageContainer = styled.main`
  width: 100%;
  height: auto;
  position: relative;
`
export default Challenge