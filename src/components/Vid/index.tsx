interface VidProps {
  src: string;
  title: string;

};

export const Vid = ({ src, title }: VidProps) => (
  <div style={{
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%', /* Aspect ratio (16:9) */
    height: '0',
    overflow: 'hidden',
   }}>
    <iframe
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        border: '0',
      }}
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen>
    </iframe>
  </div>
);
