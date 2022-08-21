const GeneralHead = ({ description, ogUrl, ogImage, ogTitle }) => {
  return (
    <>
      <meta property="og:url" content={process.env.NEXT_PUBLIC_URL + ogUrl} key="ogurl" />
      <meta property="og:image" content={process.env.NEXT_PUBLIC_URL + "/" + ogImage} key="ogimage" />
      <meta property="og:site_name" content="Exeter Tiny House Community" key="ogsitename" />
      <meta property="og:title" content={ogTitle + "  - Exeter Tiny House Community"} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
    </>
  );
};

export default GeneralHead;
