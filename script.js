const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');

// Register a new user
registerBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let newUser = {
    firstName: document.getElementById('signup-firstname').value,
    lastName: document.getElementById('signup-lastname').value,
    email: document.getElementById('signup-email').value,
    password: document.getElementById('signup-password').value,
  };

  fetch('https://uppgift1-backend.herokuapp.com/users/register', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  })
    .then((res) => res.json())
    .then((data) => {
      alert('Your account has been created. Please log in now!');
    });

  document.getElementById('signup-firstname').value = '';
  document.getElementById('signup-lastname').value = '';
  document.getElementById('signup-email').value = '';
  document.getElementById('signup-password').value = '';
});

// Log in an existing user

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let loginUser = {
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
  };

  fetch('https://uppgift1-backend.herokuapp.com/users/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginUser),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.firstName !== undefined) {
        displayInfo(data);
      } else {
        alert('Wrong email or password!');
      }
    });

  const displayInfo = (data) => {
    const info = document.getElementById('info');
    info.insertAdjacentHTML(
      'beforeend',
      `<h2>Hello ${data.firstName}</h2>
    <p>Would you like to subscribe to our newsletter? <input
    type='checkbox' data-id='${data._id}'
    name='subscribe-to-newsletter'
    id='subscribe-to-newsletter' ${data.subscribed == true ? 'checked' : ''}
  /></p>`
    );

    const subscribeCheckbox = document.getElementById(
      'subscribe-to-newsletter'
    );

    localStorage.setItem('id', JSON.stringify(subscribeCheckbox.dataset.id));

    subscribeCheckbox.addEventListener('change', () => {
      let subscribed = subscribeCheckbox.checked;
      console.log(subscribed);

      fetch('https://uppgift1-backend.herokuapp.com/users/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: JSON.parse(localStorage.getItem('id')),
          subscribed: subscribed,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    });
  };
});
