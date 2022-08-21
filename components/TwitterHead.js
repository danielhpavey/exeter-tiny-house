const TwitterHead = ({ description, ogUrl, ogImage, ogTitle }) => {
  return (
    <>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@danielhpavey" />
      <meta name="twitter:title" content={ogTitle + " - Exeter Tiny House Community"} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@danielhpavey" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_URL + ogUrl} />
      <meta name="twitter:image" content={process.env.NEXT_PUBLIC_URL + "/" + ogImage} />
    </>
  );
};

export default TwitterHead;
