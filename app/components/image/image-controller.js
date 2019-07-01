import ImageService from "./image-service.js";

let _is = new ImageService()

function drawImage() {
  let image = _is.imageApi
  document.querySelector('#bg-image').style.backgroundImage = `url(${image})`;
}

export default class ImageController {
  constructor() {
    _is.addSubscriber('image', drawImage)
    _is.getImage()
  }
}