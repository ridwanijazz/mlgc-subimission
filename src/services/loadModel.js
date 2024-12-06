const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/mlgc-sub-ridwan/model.json');
}
module.exports = loadModel;