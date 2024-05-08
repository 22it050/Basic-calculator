
        function clearScreen() {
            document.getElementById("result").value = "";
        }

        function display(value) {
            var displayValue = document.getElementById("result").value;

            if (value === '*') {
                displayValue += '*';
            } else if (value === '÷') {
                displayValue += '/';
            } else {
                displayValue += value;
            }

            document.getElementById("result").value = displayValue;
        }
        function calculate() {
            var expression = document.getElementById("result").value;

            try {
                var result = eval(expression);
                document.getElementById("result").value = result;
            } catch (error) {
                document.getElementById("result").value = "Error";
            }
        }
