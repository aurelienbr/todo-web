import { flatten } from '~utils/objectUtils';

const lang = {
  app: {
    title: 'React Boilerplate',
    page: {
      login: {
        title: 'Login',
        submit: 'Sign in',
        error: 'Unable to connect'
      },
      register: {
        title: 'Register',
        submit: 'Sign up',
        member: 'Already have an account ?'
      }
    },
    form: {
      error: {
        email: 'Mail should be valid',
        password: 'Password required',
        'password-confirm': 'Both password must match'
      },
      label: {
        email: 'Email',
        password: 'Passord',
        'password-confirm': 'Confirm passord'
      },
      placeholder: {
        email: 'Email',
        password: 'Password',
        username: 'Username',
        'password-confirm': 'Confirm password',
        firstname: 'Firstname',
        lastname: 'Lastname'
      }
    },
    error: {
      unknow: 'Unknow error',
      login: {
        'not-found': 'Username or password incorrect'
      }
    }
  }
};

export default flatten(lang);
