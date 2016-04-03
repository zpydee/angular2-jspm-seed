export default function Apple() {
    this.color = 'green'
}

Apple.prototype.tellColor = function() {
    console.log('And your apple color is .... ' + this.color);
};