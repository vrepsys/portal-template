import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Props {
  title: string;
  subtitle: string;
  image: StaticImageData | string;
  url: string;
}

export const Card: React.FC<Props> = ({ title, subtitle, image, url }) => {
  return (
    <li className='m-0'>
      <Link href={url} passHref>
        <a className="flex flex-col p-2 pb-3 bg-white rounded-xl duration-300 border border-white hover:bg-slate-50 hover:border-slate-100">
          <div className="overflow-hidden rounded-md">
            <Image layout="responsive" src={image} alt="" aria-hidden={true} />
          </div>
          <div className="text-base font-bold text-color-default mt-2 md:text-small md:font-bold">{title}</div>
          <div className="text-base text-color-secondary md:mt-1 md:text-small">{subtitle}</div>
        </a>
      </Link>
    </li>
  );
};
