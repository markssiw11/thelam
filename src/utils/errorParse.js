const parseErrorLogin = (err) => {
  switch (err) {
    case 'The email address is already in use by another account.':
      return 'Email này đã được đăng ký bởi một tài khoản khác';

    default:
      return 'Mật khẩu hoặc tài khoản không chính xác';
  }
};

export default {
  parseErrorLogin,
};
