import Image from 'next/image';
import VercelIcon from 'public/vercel-icon.svg';
import NetlifyIcon from 'public/netlify-icon.svg';

type platformType = 'vercel' | 'netlify';

const repoUrl = encodeURIComponent('https://github.com/vrepsys/portal-template');
const PLATFORMS: Record<platformType, any> = {
  vercel: {
    icon: VercelIcon,
    text: 'Deploy to Vercel',
    bg: '#3772E7',
    url: `https://vercel.com/new/clone?repository-url=${repoUrl}`,
  },
  netlify: {
    icon: NetlifyIcon,
    text: 'Deploy to Netlify',
    bg: '#3D827D',
    url: `https://app.netlify.com/start/deploy?repository=${repoUrl}`,
  },
};

interface Props {
  platform: platformType;
}

export const DeployButton: React.FC<Props> = ({ platform: name }) => {
  const platform = PLATFORMS[name];
  return (
    <a
      className={`inline-flex bg-[${platform.bg}] text-white text-small font-semibold py-1.5 px-2 rounded-md`}
      style={{ backgroundColor: platform.bg }}
      href={platform.url}
    >
      <span className="flex mr-1.5">
        <Image
          className="my-auto"
          width="14"
          height="14"
          src={platform.icon}
          alt=""
          aria-hidden="true"
        />
      </span>
      {platform.text}
    </a>
  );
};
