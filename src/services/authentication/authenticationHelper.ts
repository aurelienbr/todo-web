import ServiceError from '~services/ServiceError';

// eslint-disable-next-line
export function handleLoginError(error: any) {
  let errorMessage = '';
  try {
    if (error.response.status === 400) errorMessage = 'app.error.login.not-found';
  } catch (e) {
    throw new Error('app.error.unknow');
  }
  throw new Error(errorMessage === '' ? 'app.error.unknow' : errorMessage);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function handleRegisterError (error: any) {
  let errorMessage = '';

  try {
    if (error.response.status === 400) {
      if (error.response.data.email) errorMessage = 'Cet email est déjà pris';
    }
    if (error.message === 'Network Error') errorMessage = 'Une erreur est survenue, veuillez vérifier votre connexion internet';
  } catch (e) {
    throw new Error('Une erreur est survenue, veuillez réessayer');
  }
  throw new Error(errorMessage === '' ? 'Une erreur est survenue, veuillez réessayer' : errorMessage);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function handleProfileError (error: any) {
  throw new ServiceError('Une erreur est survenue, veuillez réessayer', error.response ? error.response.status : 500);
}
