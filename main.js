let outputBox = document.getElementById('input-box');

const btnValue = (num) => {
    return outputBox.value += num;
}
const Cal = () => {
    try{
        outputBox.value = eval(outputBox.value);
    } catch {
        alert('Invalid Inputs');
    }
}
const Clear = () => {
    return outputBox.value = '';
}
const Del = () => {
    outputBox.value = outputBox.value.slice(0,-1);
}