
const KeyMine = '47125427-ad9e927b7d4f8d8b2ea4266bf';






export function loadPhoto(query) {
    console.log('queryUser', query);
    const promPixbay = fetch(`https://pixabay.com/api/?key=${KeyMine}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`);
    return promPixbay
}











































































































