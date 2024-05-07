const validateFormCheck = (state) => {
    const inputsValues = Object.values(state.values);
    const resultCheck = inputsValues.every((value) => {
        if (!value) {
            return false;
        };

        if (value.trim().length === 0) {
            return false;
        };
        
        return true;
    });

    return resultCheck;
};

const checkValuesInput = (state) => {
    const inputsValues = Object.values(state.values);
    const resultCheck = inputsValues.some((value) => {
        if(!value) {
            return false;
        };
        return true;
    });

    return resultCheck;
}

const elements = {
    inputs: document.querySelectorAll('[type="text"]'),
    age: document.querySelector('[name="age"]'),
    height: document.querySelector('[name="height"]'),
    weight: document.querySelector('[name="weight"]'),
    submit: document.querySelector('[name="submit"]'),
    reset: document.querySelector('[name="reset"]')
};

const render = (state) => {
    console.log(checkValuesInput(state))
    if(state.validate) {
        elements.submit.disabled = false;
    };
    if(!state.validate) {
        elements.submit.disabled = true;
    };
    if(checkValuesInput(state)) {
        elements.reset.disabled = false;
    };
    if(!checkValuesInput(state)) {
        elements.reset.disabled = true;
    } 
};

const app = () => {
    const state = {
        values: {
            age: null,
            height: null,
            weight: null
        },
        validate: false
    };

    elements.inputs.forEach((input) => {
        input.addEventListener('input', (event) => {
            const value = event.target.value;
            state.values[event.target.name] = value;
            state.validate = validateFormCheck(state);
            render(state);
        })
    });
};

app()