 document.getElementById("generateBtn").addEventListener("click", () => {
  const length = parseInt(document.getElementById("length").value);
  const useUpper = document.getElementById("uppercase").checked;
  const useLower = document.getElementById("lowercase").checked;
  const useNumber = document.getElementById("numbers").checked;
  const useSymbol = document.getElementById("symbols").checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>/?";

  let allChars = "";
  if (useUpper) allChars += upper;
  if (useLower) allChars += lower;
  if (useNumber) allChars += numbers;
  if (useSymbol) allChars += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  document.getElementById("result").value = password;
});

document.getElementById("copyBtn").addEventListener("click", () => {
  const result = document.getElementById("result");
  result.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
});
