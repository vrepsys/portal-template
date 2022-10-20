import Image, { ImageProps } from 'next/image';

interface Props extends ImageProps {
  caption?: string;
}

export const PortalImage: React.FC<Props> = ({ caption, ...props }) => {
  return (
    <figure className="my-3">
      <div className="flex border border-color-divider rounded-lg overflow-hidden">
        <Image alt={props.alt} {...props} />
      </div>
      {caption && (
        <figcaption className="text-center text-small italic text-color-secondary">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
