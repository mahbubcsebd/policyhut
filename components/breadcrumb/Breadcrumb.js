import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import './breadcrumb.css';

const NextBreadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}) => {
  const paths = usePathname();
  const decodedPaths = paths.split('/').map(decodeURIComponent);
  const pathNames = decodedPaths.filter((path) => path);

  const lastIndex = pathNames.length - 1;

  return (
    <div>
      <ul className={containerClasses}>
        <li className={listClasses}>
          <Link href={'/'}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join('/')}`;
          let itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;

          const isLast = index === lastIndex;

          return (
              <React.Fragment key={index}>
                  <li
                      className={
                          isLast
                              ? `${itemClasses} ${activeClasses}`
                              : itemClasses
                      }
                  >
                      <Link href={href}>{itemLink}</Link>
                  </li>
                  {pathNames.length !== index + 1 && separator}
              </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default NextBreadcrumb;
