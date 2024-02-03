import iziToast from "izitoast";

// Обробка події submit форми
document.getElementById("notificationForm").addEventListener("submit", function (event) {
  // Запобігаємо стандартному поведінці форми (перезавантаження сторінки)
  event.preventDefault();

  // Отримання значень з форми
  const delay = parseInt(this.elements.delay.value);
  const state = this.elements.state.value;

  // Створення промісу
  const snackbarPromise = new Promise((resolve, reject) => {
    // Виконання або відхилення промісу після затримки
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  // Обробка виконання промісу
  snackbarPromise
    .then((delay) => {
      // Виведення повідомлення про вдале виконання
      iziToast.success({
        title: "Fulfilled promise",
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch((delay) => {
      // Виведення повідомлення про невдале виконання
      iziToast.error({
        title: "Rejected promise",
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
});