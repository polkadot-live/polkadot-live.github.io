import useBaseUrl from '@docusaurus/useBaseUrl';

export const Img = ({url}) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1em 0' }}>
    <img
      src={useBaseUrl(url)}
      style={{ maxHeight: '400px' }}
    />
  </div>
);