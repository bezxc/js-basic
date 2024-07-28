function crypt(password) {
  if (password.length < 8) {
    console.log("Пароль должен содержать больше 8 символов");
    return;
  }

  const splitedPassword = password.split("");

  const firstPart = splitedPassword.slice(0, splitedPassword.length / 2);
  const secondPart = splitedPassword.slice(
    splitedPassword.length / 2,
    splitedPassword.length,
  );

  firstPart.reverse();
  secondPart.reverse();

  const encryptedPassword = firstPart.concat(secondPart).join("");

  return encryptedPassword;
}

function check(password, encryptedPassword) {
  return password === crypt(encryptedPassword);
}

console.log(crypt("password"));
console.log(check("12345678", crypt("12345678")));
