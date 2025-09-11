// function validateEmail(email) {
//   return email.includes(".") && email.includes("@") && email[0] !== "@";
// }

// function validateEmail(email) {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

function validateEmail(email) {
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    return false;
  }

  const [local, domainExtension] = email.split("@");
  if (local.length < 1) {
    return false;
  }

  const [domain, extension] = domainExtension.split(".");
  console.log(domain, extension);
  if (domain.length < 2 || extension.length < 2) {
    return false;
  }
  return true;
}

module.exports = validateEmail;
