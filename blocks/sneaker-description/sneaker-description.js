import { collectionName } from '../../scripts/collection-name.js';

/**
 * @param {HTMLElement} $block
 */
export default function decorate() {
    const originalContainer = document.querySelector('.sneaker-description.block');
    const originalText = originalContainer.querySelector("body > main > div > div.sneaker-description-wrapper > div > div:nth-child(1) > div > ul > li:nth-child(1) > ul > li");
    originalText.innerHTML = originalText.textContent.replace('COLLECTION_NAME_PLACEHOLDER', collectionName);
}
