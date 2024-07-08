let input = document.querySelector("#input");
let countBtn = document.querySelector("#countBtn");
let output = document.querySelector("#output");
let reset = document.querySelector("#reset");

function countVowel(userInput) {
  const lowerStr = userInput.toLowerCase();
  const vowel = "aeiou";

  let vowels = 0;

  for (const char of lowerStr) {
    if (vowel.includes(char)) {
      vowels++;
    }
  }
  return vowels;
}

countBtn.addEventListener("click", () => {
  const userInput = input.value;
  if (userInput.trim() === "") {
    output.textContent = "Please enter something";
    return;
  }

  const vowels = countVowel(userInput);
  output.textContent = `The number of vowels: ${vowels}`;
  countBtn.disabled = true;
});

reset.addEventListener("click", () => {
  input.value = "";
  output.textContent = "";
  countBtn.disabled = false;
});
