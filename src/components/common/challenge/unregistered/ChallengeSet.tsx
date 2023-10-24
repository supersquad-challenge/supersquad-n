"use client"
import React from 'react'
import UnRegisterItem from '@/components/common/challenge/unregistered/ChallengeItem'
import { convertIsoDateToReadable } from '@/utils/dateFormatUtils'
import { thousandFormat } from '@/utils/moneyFormatUtils'

type Props = {
  id: string;
  title: string;
  category: string;
  endDate: string;
  startDate: string;
  participants: number;
  deposit: number;
  thumbnail: string;
  isRegistered: boolean;
}

const ChallengeSet = ({ 
  id,
  title,
  category, 
  endDate,
  startDate,
  participants,
  thumbnail,
  deposit,
  isRegistered
 }: Props) => {

  return (
    <UnRegisterItem
      id={id}
      title={title}
      thumbnailUrl={thumbnail}
      duration={startDate.length === 0 ? 'None' : `${convertIsoDateToReadable(startDate)} 
      - ${convertIsoDateToReadable(endDate)}`}
      participants={participants}
      deposit={thousandFormat(deposit)}
      isRegistered={isRegistered}
    />
  )
}

export default ChallengeSet