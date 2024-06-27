import useBaseUrl from '@docusaurus/useBaseUrl';

interface ImgProps {
  url: string;
  maxHeight?: string;
}

export const Img = ({url, maxHeight = '400px'}: ImgProps) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1em 0' }}>
    <img
      src={useBaseUrl(url)}
      style={{ maxHeight }}
    />
  </div>
);
