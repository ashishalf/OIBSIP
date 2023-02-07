const tempConverter = () => {
    const input = document.getElementById('temp').value;

    const tempSelect = document.getElementById('tempType');
    const value = tempType.options[tempSelect.selectedIndex].value;
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(2);
        return fahrenheit;
    }
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(2);
        return celsius;
    }

    if (value == 'cel') {
        document.getElementById("answer").innerHTML = celToFah(input) + " °F";
    }
    else {
        document.getElementById("answer").innerHTML = fahToCel(input) + " °C";
    }
}