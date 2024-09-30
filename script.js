document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('text-input');
    const checkBtn = document.getElementById('check-btn');
    const result = document.getElementById('result');
    const alert = document.getElementById('alert');

    function isPalindrome(str) {
        const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return cleanStr === cleanStr.split('').reverse().join('');
    }

    function showAlert(message) {
        alert.textContent = message;
        alert.style.display = 'block';
        setTimeout(() => {
            alert.style.display = 'none';
        }, 3000);
    }

    checkBtn.addEventListener('click', function() {
        const inputValue = textInput.value.trim();
        
        if (!inputValue) {
            showAlert('Please input a value');
            result.textContent = '';
            return;
        }

        const palindromeResult = isPalindrome(inputValue)
            ? `${inputValue} is a palindrome`
            : `${inputValue} is not a palindrome`;
        
        result.textContent = palindromeResult;
    });
});