let number = document.getElementById("rateNum");
      let counter = 0;
      
      setInterval(() => {
        if (counter >= 8.3) {
          clearInterval(); // Stop when the counter reaches 8.5
        } else {
          counter += 0.1; // Increment by 0.1
          number.innerHTML = counter.toFixed(1); // Display the number with one decimal point
        }
      }, 25);
      