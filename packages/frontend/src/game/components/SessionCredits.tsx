import { Badge } from '../../components';

type SessionCreditsProps = {
  credits?: number;
};

export const SessionCredits = ({ credits }: SessionCreditsProps) => {
  return (
    <div className='flex justify-end items-center'>
      <Badge variant='default'>Session Credits: {credits ?? 0}</Badge>
    </div>
  );
};
