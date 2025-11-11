import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";

export default function Auth() {
  const responseMessage = (response: CredentialResponse) => {
    console.log(response);
  };
  const errorMessage = () => {
    console.log('Login Failed');
  };

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h2>React Google Login</h2>
      <br />
      <br />
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
}
