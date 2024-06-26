import * as S from '@/styles/signin.styled';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/Button/Button';
import { postCheckEmail, postSignUp } from '../api/api';
import { Controller, useForm } from 'react-hook-form';
import { emailPattern } from '@/util/util';
import { useLoadUser } from '@/contexts/UserContext';
import { useRouter } from 'next/router';
import { FormValueType } from './signin';
import AuthInput from '@/components/Input/AuthInput';
import { useMutation } from '@tanstack/react-query';
import Loading from '@/components/Loading/Loading';

function SignUp() {
  const { handleSubmit, control, watch, setError } = useForm<FormValueType>({
    mode: 'onChange',
  });
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [passwordConfirmHidden, setPasswordConfirmHidden] = useState(true);
  const [disableButton, setDisableButton] = useState(false);
  const router = useRouter();
  const { user } = useLoadUser();

  const { mutate: checkEmail } = useMutation({
    mutationFn: (id: string) => postCheckEmail(id),
    onMutate: () => setDisableButton(false),
    onError: () => {
      setError('id', { type: 'manual', message: '이미 가입된 이메일입니다!' });
      setDisableButton(true);
    },
  });

  const { mutate: signUp, isPending: signUpLoading } = useMutation({
    mutationFn: (user: { id: string; password: string }) =>
      postSignUp(user.id, user.password),
    onSuccess: () => (window.location.href = '/signin'),
  });

  const formAction = async (data: FormValueType) => {
    signUp(data);
  };

  useEffect(() => {
    if (user) {
      router.replace('/folder');
    }
  }, [user, router]);

  return (
    <>
      {signUpLoading && <Loading />}
      <S.SignBody>
        <S.SignContent>
          <S.SignFormBody>
            <S.FormLogo>
              <Link href="/">
                <Image src="/logo.svg" alt="메인로고" width={210} height={38} />
              </Link>
              <S.Question>
                <span>이미 회원이신가요?</span>
                <Link href="/signin" style={{ textDecoration: 'none' }}>
                  <p>로그인하기</p>
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
                      value={value}
                      onChange={onChange}
                      onBlur={() => {
                        onBlur;
                        if (value && !error) {
                          checkEmail(value);
                        }
                      }}
                      type="text"
                      placeholder="이메일"
                      size="md"
                      error={error}
                      id="email"
                      label="이메일"
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
                    minLength: {
                      value: 8,
                      message: '최소 8자를 입력해주세요!',
                    },
                    deps: ['confirmPassword'],
                  }}
                  render={({
                    field: { value, onChange, onBlur },
                    fieldState: { error },
                  }) => (
                    <AuthInput
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      type={passwordHidden ? 'password' : 'text'}
                      placeholder="비밀번호"
                      size="md"
                      error={error}
                      id="password"
                      label="비밀번호"
                    />
                  )}
                />
                <S.TextHiddenButton
                  $hidden={passwordHidden}
                  onClick={() => setPasswordHidden(!passwordHidden)}
                />
              </S.InputModal>
              <S.InputModal>
                <Controller
                  name="confirmPassword"
                  control={control}
                  rules={{
                    required: '비밀번호를 입력해주세요!',
                    validate: (value) => {
                      return value === watch('password')
                        ? true
                        : '비밀번호가 일치하지 않습니다!';
                    },
                  }}
                  render={({
                    field: { value, onChange, onBlur },
                    fieldState: { error },
                  }) => (
                    <AuthInput
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      type={passwordConfirmHidden ? 'password' : 'text'}
                      placeholder="비밀번호"
                      size="md"
                      error={error}
                      id="passwordConfirm"
                      label="비밀번호확인"
                    />
                  )}
                />
                <S.TextHiddenButton
                  $hidden={passwordConfirmHidden}
                  onClick={() =>
                    setPasswordConfirmHidden(!passwordConfirmHidden)
                  }
                />
              </S.InputModal>
              <Button size={'lg'} type="submit" isActive={disableButton}>
                회원가입
              </Button>
            </S.SignForm>
          </S.SignFormBody>
          <S.SnsLogin>
            다른 방식으로 가입하기
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
        </S.SignContent>
      </S.SignBody>
    </>
  );
}

export default SignUp;
