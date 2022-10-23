import type { NextPage } from 'next';
import Head from 'next/head';
import { Popover } from '@headlessui/react';
import { Heading2 } from '../components/typography/heading2';
import { Heading3, Heading4, Heading5, PageSubtitle, PageTitle } from '../components/typography';
import { SideNavigation } from '../components/side-navigation/SideNavigation';
import { PageLayout } from '../components/page-layout';
import { DeployButton } from '../components/deploy-button/DeployButton';
import { CardsExample } from '../components/cards-example';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const IconNetlify: React.FC = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M13.5957 7.55853L13.5899 7.55602C13.5865 7.55477 13.5832 7.55351 13.5803 7.55059C13.5755 7.54544 13.5719 7.53926 13.5699 7.53252C13.5679 7.52579 13.5674 7.51868 13.5686 7.51174L13.8915 5.53748L15.4058 7.05222L13.8309 7.72228C13.8265 7.72405 13.8219 7.7249 13.8171 7.72479H13.8109C13.8088 7.72353 13.8067 7.72186 13.8025 7.71769C13.7439 7.65243 13.6738 7.59848 13.5957 7.55853V7.55853ZM15.7922 7.43822L17.4114 9.05739C17.7477 9.39409 17.916 9.56202 17.9774 9.75669C17.9866 9.78552 17.9942 9.81434 18 9.844L14.1304 8.20519C14.1284 8.20433 14.1263 8.2035 14.1242 8.20269C14.1087 8.19642 14.0908 8.18932 14.0908 8.17344C14.0908 8.15757 14.1091 8.15005 14.1246 8.14378L14.1296 8.1417L15.7922 7.43822V7.43822ZM17.934 10.3637C17.8504 10.5207 17.6875 10.6837 17.4118 10.9598L15.5863 12.7849L13.2252 12.2932L13.2127 12.2907C13.1918 12.2874 13.1696 12.2836 13.1696 12.2648C13.1607 12.1674 13.1317 12.0729 13.0847 11.9872C13.0376 11.9014 12.9734 11.8263 12.896 11.7665C12.8864 11.7569 12.8889 11.7418 12.8918 11.728C12.8918 11.7259 12.8918 11.7238 12.8927 11.7222L13.3367 8.99598L13.3384 8.98679C13.3409 8.9659 13.3447 8.94167 13.3635 8.94167C13.4586 8.92984 13.5505 8.89918 13.6337 8.85148C13.7169 8.80379 13.7897 8.74001 13.848 8.66388C13.8518 8.6597 13.8543 8.6551 13.8593 8.6526C13.8727 8.64633 13.8886 8.6526 13.9024 8.65844L17.9336 10.3637H17.934ZM15.1664 13.2047L12.1645 16.2067L12.6784 13.0485L12.6792 13.0443C12.6796 13.0402 12.6805 13.036 12.6817 13.0322C12.6859 13.0222 12.6967 13.018 12.7072 13.0138L12.7122 13.0118C12.8247 12.9638 12.9242 12.8897 13.0025 12.7958C13.0126 12.7841 13.0247 12.7728 13.0401 12.7707C13.0441 12.7701 13.0482 12.7701 13.0522 12.7707L15.166 13.2052L15.1664 13.2047ZM11.5292 16.842L11.1908 17.1804L7.44988 11.774C7.44853 11.772 7.44714 11.77 7.44571 11.7681C7.43986 11.7602 7.43359 11.7523 7.43485 11.7431C7.43526 11.7364 7.43944 11.7305 7.44404 11.7255L7.44821 11.7201C7.45949 11.7034 7.4691 11.6867 7.47954 11.6687L7.4879 11.6541L7.48915 11.6528C7.495 11.6428 7.50043 11.6332 7.51046 11.6278C7.51923 11.6236 7.53134 11.6253 7.54095 11.6273L11.6854 12.4821C11.697 12.4839 11.7079 12.4886 11.7171 12.4958C11.7226 12.5013 11.7238 12.5071 11.7251 12.5138C11.754 12.6232 11.8078 12.7244 11.8823 12.8095C11.9568 12.8947 12.0499 12.9615 12.1545 13.0047C12.1662 13.0105 12.1612 13.0234 12.1558 13.0372C12.1531 13.0433 12.151 13.0496 12.1495 13.056C12.0973 13.3735 11.6495 16.1047 11.5292 16.842ZM10.8223 17.5484C10.5729 17.7953 10.4259 17.9261 10.2596 17.9787C10.0957 18.0306 9.91976 18.0306 9.75583 17.9787C9.56116 17.9169 9.39281 17.749 9.05653 17.4123L5.29976 13.6555L6.28104 12.1337C6.28563 12.1261 6.29023 12.1195 6.29775 12.114C6.30819 12.1065 6.32323 12.1098 6.33576 12.114C6.56099 12.182 6.80282 12.1697 7.02003 12.0793C7.0313 12.0752 7.04258 12.0722 7.05136 12.0802C7.05574 12.0842 7.05967 12.0887 7.06305 12.0936L10.8223 17.5489V17.5484ZM4.93757 13.2933L4.07577 12.4315L5.77766 11.7055C5.78201 11.7036 5.7867 11.7026 5.79144 11.7025C5.80564 11.7025 5.814 11.7167 5.82152 11.7297C5.83862 11.756 5.85674 11.7817 5.87583 11.8066L5.88126 11.8132C5.88627 11.8203 5.88293 11.8274 5.87791 11.8341L4.93799 13.2933H4.93757ZM3.69437 12.0501L2.60406 10.9598C2.41858 10.7743 2.28407 10.6398 2.19049 10.5241L5.5057 11.2117C5.50987 11.2125 5.51405 11.2132 5.51824 11.2138C5.53871 11.2171 5.56126 11.2209 5.56126 11.2401C5.56126 11.261 5.53662 11.2706 5.51573 11.2785L5.50612 11.2827L3.69437 12.0501ZM2 9.96348C2.00378 9.89324 2.01641 9.82376 2.0376 9.75669C2.09942 9.56202 2.26736 9.39409 2.60406 9.05739L3.99932 7.66213C4.64174 8.59448 5.2859 9.52563 5.9318 10.4556C5.94308 10.4706 5.95561 10.4873 5.94266 10.4999C5.88167 10.5671 5.82068 10.6406 5.77766 10.7204C5.77299 10.7307 5.7658 10.7396 5.75677 10.7463C5.75134 10.7497 5.74549 10.7484 5.73922 10.7472H5.73839L2 9.96306V9.96348ZM4.37278 7.28866L6.24887 5.41258C6.42516 5.48986 7.06681 5.76097 7.64079 6.00327C8.07525 6.18707 8.47127 6.35417 8.59576 6.40848C8.60829 6.41349 8.61957 6.4185 8.625 6.43104C8.62834 6.43855 8.62667 6.44816 8.625 6.4561C8.5953 6.59152 8.59972 6.7322 8.63785 6.86549C8.67599 6.99879 8.74665 7.12051 8.84348 7.21974C8.85601 7.23227 8.84348 7.25023 8.83262 7.26569L8.82677 7.27446L6.92186 10.225C6.91684 10.2333 6.91225 10.2404 6.90389 10.2459C6.89387 10.2521 6.87966 10.2492 6.86797 10.2463C6.79388 10.2269 6.71771 10.2165 6.64113 10.2154C6.57262 10.2154 6.49826 10.2279 6.42307 10.2417H6.42265C6.4143 10.2429 6.40678 10.2446 6.40009 10.2396C6.39271 10.2336 6.38636 10.2264 6.3813 10.2183L4.37278 7.28866V7.28866ZM6.62776 5.03368L9.05653 2.60492C9.39281 2.26864 9.56116 2.10029 9.75583 2.03888C9.91976 1.98704 10.0957 1.98704 10.2596 2.03888C10.4543 2.10029 10.6226 2.26864 10.9589 2.60492L11.4853 3.13128L9.75792 5.80651C9.75365 5.8143 9.74781 5.82112 9.74079 5.82656C9.73035 5.83366 9.71573 5.83074 9.70319 5.82656C9.567 5.78523 9.42279 5.77771 9.28304 5.80464C9.14329 5.83157 9.0122 5.89214 8.90113 5.98113C8.88985 5.99282 8.87314 5.98614 8.85893 5.97987C8.63335 5.8817 6.87883 5.14021 6.62776 5.03368V5.03368ZM11.8521 3.49806L13.447 5.093L13.0627 7.47331V7.47957C13.0623 7.485 13.0612 7.49034 13.0593 7.49545C13.0552 7.5038 13.0468 7.50547 13.0385 7.50798C12.9563 7.53287 12.8789 7.57142 12.8095 7.62202C12.8066 7.62415 12.8038 7.62652 12.8012 7.62912C12.7966 7.63414 12.792 7.63873 12.7845 7.63957C12.7784 7.63976 12.7723 7.63876 12.7665 7.63664L10.3361 6.60398L10.3315 6.60189C10.316 6.59563 10.2976 6.58811 10.2976 6.57223C10.2834 6.43679 10.2391 6.30623 10.1681 6.19C10.1564 6.17078 10.1435 6.15073 10.1535 6.1311L11.8521 3.49806V3.49806ZM10.2095 7.09316L12.4879 8.05815C12.5004 8.064 12.5142 8.06943 12.5196 8.08238C12.5218 8.09016 12.5218 8.0984 12.5196 8.10619C12.5129 8.13961 12.5071 8.17762 12.5071 8.21605V8.27997C12.5071 8.29584 12.4908 8.30253 12.4758 8.30879L12.4712 8.31046C12.1102 8.46461 7.40393 10.4715 7.39683 10.4715C7.38973 10.4715 7.38221 10.4715 7.37511 10.4644C7.36258 10.4518 7.37511 10.4343 7.38639 10.4184C7.38838 10.4156 7.39033 10.4129 7.39224 10.41L9.26456 7.5109L9.2679 7.50589C9.27877 7.48834 9.2913 7.46871 9.31135 7.46871L9.33015 7.47163C9.37276 7.47748 9.41036 7.48291 9.44837 7.48291C9.73244 7.48291 9.99561 7.34464 10.1544 7.1082C10.1581 7.10188 10.1629 7.09624 10.1686 7.09149C10.1798 7.08313 10.1965 7.08731 10.2095 7.09316V7.09316ZM7.60027 10.9301L12.7302 8.74241C12.7302 8.74241 12.7377 8.74241 12.7448 8.74951C12.7728 8.7775 12.7966 8.7963 12.8196 8.81385L12.8308 8.82095C12.8413 8.8268 12.8517 8.83348 12.8526 8.84434C12.8526 8.84852 12.8526 8.85103 12.8517 8.85478L12.4123 11.5542L12.4106 11.5651C12.4077 11.586 12.4047 11.6098 12.3851 11.6098C12.2679 11.6177 12.1545 11.6541 12.0545 11.7157C11.9546 11.7774 11.8712 11.8625 11.8115 11.9636L11.8095 11.967C11.8036 11.9766 11.7982 11.9858 11.7886 11.9908C11.7798 11.995 11.7685 11.9933 11.7593 11.9912L7.66836 11.1474C7.66419 11.1465 7.60487 10.9306 7.60027 10.9301V10.9301Z"
      />
    </svg>
  );
};
const IconVercel: React.FC = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M9.99999 3.20359L18 17H2L9.99999 3.20359Z" />
    </svg>
  );
};

const Home: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Documentation website template</PageTitle>
          <PageSubtitle>
            Portal template is a free and open source documentation website template. Feel free to
            clone it on Github, customize per your needs, and use it for your project.
          </PageSubtitle>
        </header>
        <p>
          It’s build with <a href="https://nextjs.org/">Next.js</a> and styled with{' '}
          <a href="https://tailwindcss.com/">tailwindcss</a>. Every component is customizable using
          css variables. You’re welcome to visit other pages in this template to learn more about
          each component in the template. We’ve also added some tips and tricks about what it takes
          to build a neat documentation portal.
        </p>
        <Heading2>Get started</Heading2>
        <p>Deploy to Vercel or Netlify:</p>
        <div className="flex gap-2">
          <a className="button primary netlify" href="#">
            <IconNetlify />
            Deploy to Netlify
          </a>
          <a className="button primary vercel" href="#">
            <IconVercel />
            Deploy to Vercel
          </a>
        </div>
        <Heading2>Components</Heading2>
        <p>Here's a full list of available components:</p>
        <CardsExample />
        <Heading2>Roadmap</Heading2>
        <p>We're working on a Markdoc implementation.</p>
        <Heading2>Get in touch</Heading2>
        <p>
          Hey, we&apos;re friendly! We would be happy to learn what you managed to build using this
          template, hear your feedback, ideas or any other thoughs.
        </p>
        <p>
          Reach out by writing to <a href="mailto:email@email.com">email@email.com</a>
        </p>
      </article>
    </PageLayout>
  );
};

export default Home;
