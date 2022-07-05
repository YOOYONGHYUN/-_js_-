let promise = new Promise((resolve, reject) => {
  document.getElementById("test").addEventListener("load", function () {
    resolve();
  });

  document.getElementById("test").addEventListener("error", function () {
    reject();
  });
});

promise
  .then(function () {
    console.log("성공");
  })
  .catch(function () {
    console.log("실패");
  });

<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>;
