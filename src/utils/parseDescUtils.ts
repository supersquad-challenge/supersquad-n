import { ParsedDesc } from "@/types/challenge/Challenge";


export const parseChallengeDesc = (desc: string): ParsedDesc[] => {
  const draft = desc.split('*');
  let res: ParsedDesc[] = [];
  
  draft.map((block: string, idx: number) => {
    if (idx % 2 === 0) {
      res.push({
        text: block,
        type: 'T'
      });
    } else {
      const onlyDesc = block.split('/');
      onlyDesc.map((el: string, i: number) => {
        res.push({
          text: el,
          type: 'D'
        })
      })
    }
  })
  return res;
}