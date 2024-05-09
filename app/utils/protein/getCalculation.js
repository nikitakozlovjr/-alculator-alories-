const getCalculation = (weight, standard, active) => {
    const normal = weight * standard * active;
    return {
        normal: normal,
        low: parseInt((normal * 0.85).toFixed(1)),
        more: parseInt((normal * 1.15).toFixed(1))  
    };
};

export default getCalculation;