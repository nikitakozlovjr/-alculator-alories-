const getCalculation = (active, weight, height, age, gender) => {
    const normal = active * ((10 * weight) + (6.25 * height) - (5 * age) + gender);
    return {
        normal: normal,
        low: parseInt((0.85 * normal).toFixed(1)),
        more: parseInt((1.15 * normal).toFixed(1)),
    };
};


export default getCalculation;