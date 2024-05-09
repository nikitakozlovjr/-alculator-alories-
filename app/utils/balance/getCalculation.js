const getCalculation = (weight, gender) => {
    const normal = weight * gender;
    return {
        normal: normal,
        low: parseInt((normal * 1.15).toFixed(1)),
        more: parseInt((normal * 0.85).toFixed(1))
    }
}

export default getCalculation;