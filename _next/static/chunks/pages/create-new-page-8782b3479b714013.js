(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70],{1058:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-new-page",function(){return r(5670)}])},5733:function(e,n,r){"use strict";r.d(n,{d:function(){return c}});var t=r(5893),s=r(4747),i=r(811),a=r(9736);s.Z.registerLanguage("javascript",i.Z),s.Z.registerLanguage("typescript",a.Z);var c=function(e){var n=e.language,r=e.style,i=e.children;return(0,t.jsx)(s.Z,{className:"code-block",language:n,useInlineStyles:!!r,style:r,children:i})}},4583:function(e,n,r){"use strict";r.d(n,{r:function(){return d}});var t=r(1799),s=r(9396),i=r(9534),a=r(5893),c=r(1664),l=r.n(c),d=function(e){var n=e.href,r=e.children,c=(0,i.Z)(e,["href","children"]);return(0,a.jsx)(l(),{href:n||"#",passHref:!0,children:(0,a.jsx)("a",(0,s.Z)((0,t.Z)({className:"link"},c),{children:r}))})}},40:function(e,n,r){"use strict";r.d(n,{i:function(){return c}});var t=r(1799),s=r(9396),i=r(9534),a=r(5893),c=function(e){var n=e.children,r=e.className,c=(0,i.Z)(e,["children","className"]);return(0,a.jsx)("table",(0,s.Z)((0,t.Z)({className:"".concat(r||""," table")},c),{children:n}))}},5670:function(e,n,r){"use strict";r.r(n);var t=r(5893),s=r(8959),i=r(2703),a=r(40),c=r(5733),l=r(4583),d=function(){return(0,t.jsx)(s.X,{children:(0,t.jsxs)("article",{children:[(0,t.jsxs)("header",{children:[(0,t.jsx)(i.V1,{children:"Creating new page"}),(0,t.jsx)(i.sB,{children:"Learn how to add a new page using portal-template."})]}),(0,t.jsxs)("p",{children:["Create a new ",(0,t.jsx)("code",{children:"your-page-name.tsx"})," file in"," ",(0,t.jsx)(l.r,{href:"https://github.com/vrepsys/portal-template/tree/main/pages",target:"_blank",children:"pages"})," ","folder. Then import ",(0,t.jsx)("code",{children:"NextPage"})," and ",(0,t.jsx)("code",{children:"PageLayout"})," components to the new file:"]}),(0,t.jsx)(c.d,{language:"typescript",children:"import { NextPage } from 'next';\nimport { PageLayout } from '../components/page-layout';\n"}),(0,t.jsxs)("p",{children:["Create NextJS const. Add ",(0,t.jsx)("code",{children:"<article>"})," and ",(0,t.jsx)("code",{children:"<header>"})," inside:"]}),(0,t.jsx)(c.d,{language:"typescript",children:"const YourPageName: NextPage = () => {\n  return (\n    <PageLayout>\n      <article>\n        <header>Your page header</header>\n        Your page content\n      </article>\n    </PageLayout>\n  );\n};\n"}),(0,t.jsx)("p",{children:"Export your NextJS const"}),(0,t.jsx)(c.d,{language:"typescript",children:"export default YourPageName;\n"}),(0,t.jsx)(i.XJ,{children:"Add to the sidebar"}),(0,t.jsxs)("p",{children:["Open"," ",(0,t.jsx)(l.r,{href:"https://github.com/vrepsys/portal-template/blob/main/components/side-navigation/navigation.ts",children:"navigation.ts"})," ","file. The file exports list categories. Each cateogry has its navigation items:"]}),(0,t.jsx)(c.d,{language:"typescript",children:"const YourListGroupName: NavItem[] = [\n  { title: 'Your new page', url: '/your-new-page' },\n  { title: 'Some other page', url: '/some-other-page' },\n  ...\n];\n"}),(0,t.jsxs)("p",{children:[(0,t.jsx)("code",{children:"title"})," declares what will be shown for the user in the sidebar."," ",(0,t.jsx)("code",{children:"url"})," is the name of a file saved in"," ",(0,t.jsx)(l.r,{href:"https://github.com/vrepsys/portal-template/tree/main/pages",children:"pages"})," ","folder."]}),(0,t.jsx)("p",{children:"Assign your page to a category or declare it directly in export constant:"}),(0,t.jsx)(c.d,{language:"typescript",children:'export const navigation: Category[] = [\n  { items: [{title: "Your new page", url: "/your-new-page"}]},\n  { title: \'Your list group name\', items: YourListGroupName },\n];\n'}),(0,t.jsx)(i.XJ,{children:"Customize page layout"}),(0,t.jsxs)("p",{children:["Adjust the page layout spacing using variables in"," ",(0,t.jsx)(l.r,{href:"https://github.com/vrepsys/portal-template/blob/main/styles/globals.css",children:"global.css"})," ","file."]}),(0,t.jsxs)(a.i,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Variable"}),(0,t.jsx)("th",{children:"Default value"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"--width-page-article-column"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"15rem"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"--width-page-table-of-contents-column"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"15rem"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"--width-page-column-gap"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"3.5rem"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"--width-page-padding"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"2.5rem"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"--width-page-padding-mobile"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"1.25rem"})})]})]})]}),(0,t.jsxs)("p",{children:["For other changes customize"," ",(0,t.jsx)(l.r,{href:"https://github.com/vrepsys/portal-template/blob/main/components/page-layout/PageLayout.tsx",children:"PageLayout.tsx"})," ","file."]})]})})};n.default=d}},function(e){e.O(0,[538,2,535,774,888,179],function(){return e(e.s=1058)}),_N_E=e.O()}]);