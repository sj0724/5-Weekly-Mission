import * as S from '@/styles/signin.styled';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/Button/Button';
import { postSignIn } from '../api/api';
import { Controller, useForm } from 'react-hook-form';
import { emailPattern } from '@/util/util';
import { useRouter } from 'next/router';
import { useLoadUser } from '@/contexts/UserContext';
import AuthInput from '@/components/Input/AuthInput';
import { useMutation } from '@tanstack/react-query';
import Toast from '@/components/Toast/Toast';
import Loading from '@/components/Loading/Loading';

export interface FormValueType {
  id: string;
  password: string;
  confirmPassword?: string;
}

function SignIn() {
  const [textHidden, setTextHidden] = useState(true);
  const {
    handleSubmit,
    control,
    setError,
    formState: { isValid },
  } = useForm<FormValueType>({ mode: 'onChange' });
  const [toast, setToast] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const { user } = useLoadUser();

  const { mutate, isPending } = useMutation({
    mutationFn: (user: { id: string; password: string }) =>
      postSignIn(user.id, user.password),
    onMutate: () => setIsActive(true),
    onSuccess: () => (window.location.href = '/folder'),
    onError: () => {
      setToast(true);
      setIsActive(false);
      setError('id', {
        type: 'manual',
        message: '이메일을 확인해주세요!',
      });
      setError('password', {
        type: 'manual',
        message: '비밀번호를 확인해주세요!',
      });
    },
  });

  const formAction = async (data: FormValueType) => {
    const userInfo = { id: data.id, password: data.password };
    mutate(userInfo);
  };

  const hiddenText = () => {
    setTextHidden(!textHidden);
    console.log(isValid);
  };

  useEffect(() => {
    if (user) {
      router.replace('/folder');
    }
  }, [user, router]);

  return (
    <>
      {isPending && <Loading />}
      <S.SignBody>
        <S.SignContent>
          <S.SignFormBody>
            <S.FormLogo>
              <Link href="/">
                <Image src="/logo.svg" alt="메인로고" width={210} height={38} />
              </Link>
              <S.Question>
                <span>회원이 아니신가요?</span>
                <Link href="/signup" style={{ textDecoration: 'none' }}>
                  <p>회원 가입하기</p>
                </Link>
              </S.Question>
            </S.FormLogo>
            <S.SignForm onSubmit={handleSubmit(formAction)}>
              <S.InputModal>
                <Controller
                  name="id"
                  control={control}
                  rules={{
                    required: '이메일을 입력해주세요!',
                    pattern: {
                      value: emailPattern,
                      message: '이메일 형식이 아닙니다!',
                    },
                  }}
                  render={({
                    field: { value, onChange, onBlur },
                    fieldState: { error },
                  }) => (
                    <AuthInput
                      id="email"
                      label="이메일"
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      type="text"
                      placeholder="이메일"
                      size="md"
                      error={error}
                    />
                  )}
                />
              </S.InputModal>
              <S.InputModal>
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: '비밀번호를 입력해주세요!',
                  }}
                  render={({
                    field: { value, onChange, onBlur },
                    fieldState: { error },
                  }) => (
                    <AuthInput
                      id="password"
                      label="비밀번호"
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      type={textHidden ? 'password' : 'text'}
                      placeholder="비밀번호"
                      size="md"
                      error={error}
                    />
                  )}
                />
                <S.TextHiddenButton $hidden={textHidden} onClick={hiddenText} />
              </S.InputModal>
              <Button
                size={'lg'}
                type="submit"
                buttonActive={!isValid}
                isActive={!isActive}
              >
                로그인
              </Button>
            </S.SignForm>
          </S.SignFormBody>
          <S.SnsLogin>
            소셜 로그인
            <S.SnsIcons>
              <S.Google href="https://www.google.com/" target="_blank">
                <Image
                  src="/googleIcon.png"
                  alt="구글아이콘"
                  width={22}
                  height={22}
                />
              </S.Google>
              <S.Kakao href="https://www.kakaocorp.com/page/" target="_blank">
                <Image
                  src="/Kakao.svg"
                  alt="카카오아이콘"
                  width={26}
                  height={24}
                />
              </S.Kakao>
            </S.SnsIcons>
          </S.SnsLogin>
          {toast && (
            <Toast
              setToast={setToast}
              text="로그인에 실패했습니다. 다시 시도해주세요."
            />
          )}
        </S.SignContent>
      </S.SignBody>
    </>
  );
}

export default SignIn;
