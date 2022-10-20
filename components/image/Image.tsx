import Image, { ImageProps } from 'next/image';

interface Props extends ImageProps {
  caption?: string;
}

export const PortalImage: React.FC<Props> = ({ caption, ...props }) => {
  return (
    <figure className="my-3">
      <Image alt={props.alt} {...props} />
      {caption && (
        <figcaption className="text-center text-small italic text-color-secondary">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
