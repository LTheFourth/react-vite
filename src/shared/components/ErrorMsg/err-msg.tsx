import { useErrorMsg } from 'src/shared/utils/hooks/hooks';

export default function ErrorMsgComponent({
  display = false,
  errorCode = [],
}: ErrorMsgComponentProp) {
  const err = useErrorMsg();
  if (!errorCode?.length || !display) {
    return <></>;
  }
  return <p className='form-error-msg'>{err.error(errorCode[0])}</p>;
}

interface ErrorMsgComponentProp {
  errorCode: string[] | null;
  display: boolean;
}
