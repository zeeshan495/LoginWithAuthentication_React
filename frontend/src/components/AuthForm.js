// import { useState } from 'react';
import { Form, Link, useSearchParams, useActionData, useNavigation } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
  // const [isLogin, setIsLogin] = useState(true);

  // function switchAuthHandler() {
  //   setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  // }
  const data = useActionData();
  console.log(data);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  // const isLoading = navigation.state === 'loading';
  // console.log(isLoading);
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          {/* <button onClick={switchAuthHandler} type="button">
            {isLogin ? 'Create new user' : 'Login'}
          </button> */}
          <Link to={`?mode=${isLogin?'signup':'login'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...':'Save'}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
