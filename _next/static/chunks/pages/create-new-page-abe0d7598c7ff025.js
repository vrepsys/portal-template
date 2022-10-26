(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70],{1058:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-new-page",function(){return n(5670)}])},5733:function(e,t,n){"use strict";n.d(t,{d:function(){return l}});var r=n(5893),a=n(5396),i=n(8526),s=n(9623),o=n(547);a.Z.registerLanguage("javascript",i.Z),a.Z.registerLanguage("typescript",s.Z),a.Z.registerLanguage("typescript",o.Z);var l=function(e){var t=e.language,n=e.style,i=e.children;return(0,r.jsx)(a.Z,{className:"code-block",language:t,useInlineStyles:!!n,style:n,children:i})}},4583:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var r=n(1799),a=n(9396),i=n(9534),s=n(5893),o=n(1664),l=n.n(o),c=function(e){var t=e.href,n=e.children,o=(0,i.Z)(e,["href","children"]);return(0,s.jsx)(l(),{href:t||"#",passHref:!0,children:(0,s.jsx)("a",(0,a.Z)((0,r.Z)({className:"link"},o),{children:n}))})}},5670:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(8959),i=n(8258),s=n(5733),o=n(4583),l=function(){return(0,r.jsx)(a.X,{children:(0,r.jsxs)("article",{children:[(0,r.jsxs)("header",{children:[(0,r.jsx)(i.V1,{children:"How to create a new page"}),(0,r.jsx)(i.sB,{children:"Learn how to use the Layout component to create new pages."})]}),(0,r.jsxs)("p",{children:["Create a new ",(0,r.jsx)("code",{children:"your-page-name.tsx"})," file in the"," ",(0,r.jsx)(o.r,{href:"https://github.com/vrepsys/portal-template/tree/main/pages",target:"_blank",children:"pages"})," ","folder and import the dependencies. In Next.js the file name represents the url slug for the page."]}),(0,r.jsx)(s.d,{language:"typescript",children:"import { NextPage } from 'next';\nimport { PageLayout } from '../components/page-layout';\n"}),(0,r.jsxs)("p",{children:["Create a NextPage that wraps your content in a ",(0,r.jsx)("code",{children:"<PageLayout>"}),". Start by adding a page title and a subtitle."]}),(0,r.jsx)(s.d,{language:"typescript",children:"const YourPageName: NextPage = () => {\n  return (\n    <PageLayout>\n      <article>\n        <header>\n           <PageTitle>Your page title</PageTitle>\n           <PageSubtitle>Page subtitle</PageSubtitle> \n        </header>\n        <p>Your page content goes here.</p>\n      </article>\n    </PageLayout>\n  );\n};\n"}),(0,r.jsx)("p",{children:"Export your the page"}),(0,r.jsx)(s.d,{language:"typescript",children:"export default YourPageName;\n"}),(0,r.jsx)(i.XJ,{children:"Add your page to the sidebar"}),(0,r.jsxs)("p",{children:["Navigation items and item groups are defined in"," ",(0,r.jsx)(o.r,{href:"https://github.com/vrepsys/portal-template/blob/main/components/side-navigation/navigation.ts",children:"side-navigation/navigation.ts"}),". To add a new item to the sidebar we'll create a new items group. Start by defining items for the new group:"]}),(0,r.jsx)(s.d,{language:"typescript",children:"const newItems: NavItem[] = [\n  { title: 'Your new page', url: '/your-new-page' },\n  { title: 'Some other page', url: '/some-other-page' },\n  ...\n];\n"}),(0,r.jsxs)("p",{children:["The ",(0,r.jsx)("code",{children:"title"})," property represents the navigation item text in the sidebar."," ",(0,r.jsx)("code",{children:"url"})," is the name of a file saved in"," ",(0,r.jsx)(o.r,{href:"https://github.com/vrepsys/portal-template/tree/main/pages",children:"pages"})," ","folder."]}),(0,r.jsxs)("p",{children:["For the new group to show up in the navigation add a new item to the"," ",(0,r.jsx)("code",{children:"navigation"})," array:"]}),(0,r.jsx)(s.d,{language:"typescript",children:"export const navigation: Category[] = [\n  { title: 'Title for the new group', items: newItems },\n  ...\n];\n"})]})})};t.default=l}},function(e){e.O(0,[542,181,9,774,888,179],function(){return e(e.s=1058)}),_N_E=e.O()}]);