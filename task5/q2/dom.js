// Create top-right image
const topRightImg = document.createElement('img');
topRightImg.src = 'dom.jpg';
topRightImg.alt = 'hello..it rains over here:)';
topRightImg.style.position = 'absolute';
topRightImg.style.top = '10px';
topRightImg.style.right = '10px';

// Create bottom-left image
const bottomLeftImg = document.createElement('img');
bottomLeftImg.src = 'dom.jpg';
bottomLeftImg.alt = 'hello..it rains over here:)';
bottomLeftImg.style.position = 'absolute';
bottomLeftImg.style.bottom = '10px';
bottomLeftImg.style.left = '10px';

// Add images to the body
document.body.appendChild(topRightImg);
document.body.appendChild(bottomLeftImg);
