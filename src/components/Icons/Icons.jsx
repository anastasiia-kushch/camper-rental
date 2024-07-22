import sprite from '../../shared/icons/sprite.svg';

const getSpriteUrl = (id) => `${sprite}#${id}`;

export const Icon = ({
  id,
  width = '32',
  height = '32',
  fill = '#101828',
  stroke = 'none',
}) => (
  <svg
    width={width}
    height={height}
    aria-hidden="false"
    role="svg"
    fill={fill}
    stroke={stroke}
  >
    <use xlinkHref={getSpriteUrl(id)} />
  </svg>
);
