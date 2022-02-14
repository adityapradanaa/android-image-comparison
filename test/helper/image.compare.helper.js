const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

const ImageCompareHelper = function imageCompareHelper(data,name) {
    this.compareImages = async (name) => {

        const img1 = PNG.sync.read(fs.readFileSync('./screenshots/resultData/' + name + '.png'));
        const img2 = PNG.sync.read(fs.readFileSync('./screenshots/baseData/'+ name + '.png'));
        const {width, height} = img1;
        const diff = new PNG({width, height});
        const difference = pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0});

        fs.writeFileSync('screenshots/imageDiff/' + name + '.png', PNG.sync.write(diff));

        const compatibility = 100 - diff * 100 / (width * height);

        console.log(`[Image] compatibility: ${compatibility}%`);
        if (compatibility > 0) throw new Error('Image data size does not match width/height.');
    
        console.log('[Image] pixel difference: ' + difference);
        if (difference > 0) throw new Error('Image data pixel does not match width/height.');

        //await data.saveScreenshot('./screenshots/resultData/' + name + '.png');
 
    }

    this.saveScreenshots = async (data, name)=> {
       await driver.saveScreenshot('./screenshots/resultData/' + name + '.png');
    }
}
module.exports = new ImageCompareHelper();
