// RegEx - Regular Expression
const mask = {
  phone: (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
      .replace(/(-\d{4})\d+?$/, "$1");
  },
};

document.querySelectorAll("input").forEach((input) => {
  if (input.dataset.mask) {
    const field = input.dataset.mask;

    input.addEventListener("input", (e) => {
      e.target.value = mask[field](e.target.value);
    });
  }
});
