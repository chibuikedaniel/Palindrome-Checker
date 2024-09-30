document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('text-input');
    const checkBtn = document.getElementById('check-btn');
    const result = document.getElementById('result');

    function isPalindrome(str) {
        const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return cleanStr === cleanStr.split('').reverse().join('');
    }

    checkBtn.addEventListener('click', function() {
        const inputValue = textInput.value.trim();
        
        if (!inputValue) {
            alert('Please input a value');
            return;
        }

        const palindromeResult = isPalindrome(inputValue)
            ? `${inputValue} is a palindrome`
            : `${inputValue} is not a palindrome`;
        
        result.textContent = palindromeResult;
    });
});