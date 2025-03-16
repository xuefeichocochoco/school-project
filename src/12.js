const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

function getRandomColor() {
    const colors = ['red', 'green', 'blue'];
    return colors[getRandomInt(colors.length)];
}
