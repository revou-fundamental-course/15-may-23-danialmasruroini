// Function to calculate the area of a square
function calculateArea() {
    const sisiLuasInput = document.getElementById('sisi-luas');
    const outputLuas = document.getElementById('output-luas');
    const sisi = parseFloat(sisiLuasInput.value);
  
    if (isNaN(sisi) || sisi <= 0) {
      outputLuas.textContent = 'Masukkan angka yang valid.'; // Display an error message
    } else {
      const luas = sisi * sisi; // Calculate the area
      outputLuas.textContent = `Luas: ${luas}`; // Display the area
    }
  
    sisiLuasInput.value = ''; // Clear the input field
  }
  
  // Function to calculate the perimeter of a square
  function calculatePerimeter() {
    const sisiKelilingInput = document.getElementById('sisi-keliling');
    const outputKeliling = document.getElementById('output-keliling');
    const sisi = parseFloat(sisiKelilingInput.value);
  
    if (isNaN(sisi) || sisi <= 0) {
      outputKeliling.textContent = 'Masukkan angka yang valid.'; // Display an error message
    } else {
      const keliling = 4 * sisi; // Calculate the perimeter
      outputKeliling.textContent = `Keliling: ${keliling}`; // Display the perimeter
    }
  
    sisiKelilingInput.value = ''; // Clear the input field
  }
  
  // Function to reset the calculator
  function resetCalculator() {
    const sisiLuasInput = document.getElementById('sisi-luas');
    const sisiKelilingInput = document.getElementById('sisi-keliling');
    const outputLuas = document.getElementById('output-luas');
    const outputKeliling = document.getElementById('output-keliling');
  
    sisiLuasInput.value = ''; // Clear input fields
    sisiKelilingInput.value = '';
    outputLuas.textContent = ''; // Clear output paragraphs
    outputKeliling.textContent = '';
  }
  
  // Event listener for the luas calculation form
  const luasForm = document.getElementById('calculator-form');
  luasForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    calculateArea(); // Call the calculateArea function
  });
  
  // Event listener for the keliling calculation form
  const kelilingForm = document.getElementById('perimeter-form');
  kelilingForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    calculatePerimeter(); // Call the calculatePerimeter function
  });
  
  // Event listener for the reset button
  const resetButton = document.getElementById('reset-button');
  resetButton.addEventListener('click', resetCalculator); // Call the resetCalculator function
  