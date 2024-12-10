const steps = document.querySelectorAll('.step');
        const indicators = document.querySelectorAll('.stepIndicator');
        let currentStep = 0;

        document.getElementById('nextBtn').addEventListener('click', () => {
            if (currentStep < steps.length - 1) {
                steps[currentStep].classList.add('hidden');
                indicators[currentStep].classList.remove('active');
                currentStep++;
                steps[currentStep].classList.remove('hidden');
                indicators[currentStep].classList.add('active');
            }
        });

        document.getElementById('prevBtn').addEventListener('click', () => {
            if (currentStep > 0) {
                steps[currentStep].classList.add('hidden');
                indicators[currentStep].classList.remove('active');
                currentStep--;
                steps[currentStep].classList.remove('hidden');
                indicators[currentStep].classList.add('active');
            }
        });