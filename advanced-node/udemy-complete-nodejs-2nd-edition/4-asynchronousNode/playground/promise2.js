const asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500)
    })
};

asyncAdd(5, 7).then(res => {
    console.log('Results: ', res);
    return asyncAdd(res, '33')
}).then(res => {
    console.log('Results: ', res);
}).catch(errorMessage => {
    console.log(errorMessage);
});
