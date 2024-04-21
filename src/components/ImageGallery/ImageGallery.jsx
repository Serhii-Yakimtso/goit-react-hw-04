import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ items, onClick }) {
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id}>
            <ImageCard card={item} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
}
