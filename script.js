const loginBtn = document.getElementById('login-btn');

/*loginBtn.addEventListener('click', () => {
  let loginUser = {
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
  };

  document.getElementById('email').value = '';
  document.getElementById('password').value = '';

  console.log(loginUser);
  alert(JSON.stringify(loginUser));

  fetch('http://localhost:3000/users/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert(data);
    });
*/
// fetch('http://localhost:3000/users/new/123456', {
//   method: 'post',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(newUser),
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     printList();
//   });
//});
