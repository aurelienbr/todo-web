import { flatten } from '~utils/objectUtils';

const lang = {
  app: {
    title: 'React Boilerplate',
    page: {
      login: {
        title: 'Connexion',
        submit: 'Se connecter',
        error: 'Impossible de se connecter'
      },
      register: {
        title: 'Inscription',
        submit: "S'inscrire",
        member: 'Déjà membre ?'
      }
    },
    form: {
      error: {
        email: "L'email doit être valide",
        password: 'Mot de passe requis',
        'password-confirm': 'Les mots de passes doivent correspondre'
      },
      label: {
        email: 'Email',
        password: 'Mot de passe',
        'password-confirm': 'Confirmez le mot de passe'
      },
      placeholder: {
        email: 'Email',
        password: 'Mot de passe',
        username: "Nom d'utilisateur",
        'password-confirm': 'Confirmez votre mot de passe',
        firstname: 'Prénom',
        lastname: 'Nom'
      }
    },
    error: {
      unknow: 'Erreur inconnue',
      login: {
        'not-found': 'Identifiants incorrectes'
      }
    }
  }
};

export default flatten(lang);
