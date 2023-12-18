document.getElementById('motorControl').addEventListener('click', function() {
    var button = this;
    var motorState = button.textContent === 'Off';

    button.textContent = motorState ? 'On' : 'Off';
    button.classList.toggle('on', motorState);

    if (motorState) {
        // Send request to the server to turn on the motor
        fetch('http://yourwebsite.com/activateMotor')
            .then(response => response.text())
            .then(data => console.log(data));

        // After 1 second, turn the button back to 'Off'
        setTimeout(function() {
            button.textContent = 'Off';
            button.classList.remove('on');
        }, 1000);
    }
});
