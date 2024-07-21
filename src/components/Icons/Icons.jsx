import sprite from '../../shared/icons/sprite.svg';

const getSpriteUrl = (id) => `${sprite}#${id}`;

export const Icon = ({ id, width = '32', height = '32' }) => (
  <svg width={width} height={height} aria-hidden="false" role="svg">
    <use xlinkHref={getSpriteUrl(id)} />
  </svg>
);
