import { injectScript } from '@module-federation/nextjs-mf/utils';
import { useEffect, useState } from 'react';

export const Index = () => {
  const [page, setPage] = useState();

  const Page = page;

  useEffect(() => {
    injectScript({
      global: 'remote',
      url: 'http://localhost:4300/_next/static/chunks/remoteEntry.js',
    })
      .then((container) => container.get('./HomePage'))
      .then((loader) => {
        setPage(loader().default);
      });
  }, []);

  return (
    <div className="page">
      <h1>
        <span> Hello there, </span>
        Welcome nextjs-host 👋
      </h1>

      <div className="rounded">
        <Page heyThere iAm="a string prop" />
      </div>
    </div>
  );
};

export default Index;
