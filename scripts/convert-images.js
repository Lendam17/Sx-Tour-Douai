const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const quality = 80; // Qualité WebP (0-100)

async function convertToWebP(inputPath) {
  const files = fs.readdirSync(inputPath, { recursive: true });

  for (const file of files) {
    const filePath = path.join(inputPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      await convertToWebP(filePath);
      continue;
    }

    if (!['.jpg', '.jpeg', '.png'].includes(path.extname(file).toLowerCase())) {
      continue;
    }

    const outputPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    try {
      await sharp(filePath)
        .webp({ quality })
        .toFile(outputPath);
      
      console.log(`Converted: ${file} -> ${path.basename(outputPath)}`);
      
      // Afficher les statistiques de compression
      const originalSize = fs.statSync(filePath).size;
      const webpSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(2);
      console.log(`Size reduction: ${savings}% (${(originalSize/1024).toFixed(2)}KB -> ${(webpSize/1024).toFixed(2)}KB)`);
    } catch (error) {
      console.error(`Error converting ${file}:`, error);
    }
  }
}

convertToWebP(inputDir).catch(console.error);
