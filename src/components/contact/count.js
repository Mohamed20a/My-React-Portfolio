window.onload = function () {
    const textarea = document.getElementById("message");
  
    if (textarea) {
      validateForm();
  
      textarea.addEventListener("input", () => {
        validateForm();
      });
    } else {
      console.error("Textarea element not found!");
    }
  };
  
  export const validateForm = () => {
    const textarea = document.getElementById("message");
    const charCount = document.getElementById("charCount");
    const maxChars = 350;
  
    if (textarea) {
      const remainingChars = maxChars - textarea.value.length;
      charCount.textContent = `Number of remaining characters: ${remainingChars}`;
  
      if (remainingChars <= 0) {
        charCount.classList.add("over-limit");
      } else {
        charCount.classList.remove("over-limit");
      }
    } else {
      console.error("Textarea element not found!");
    }
  };
  