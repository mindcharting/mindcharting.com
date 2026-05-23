import React, { type FC } from "react";

interface MetaProps {
  description: string;
  image?: string;
  title: string;
  url?: string;
}

const Meta: FC<MetaProps> = ({ description, title, image, url }) => (
  <>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="og:title" content={title} />
    <meta name="og:type" content="website" />
    <meta name="og:description" content={description} />
    {url && <meta property="og:url" content={url} />}

    {image ? (
      <>
        <meta name="image" content={image} />
        <meta name="og:image" content={image} />
        <meta name="twitter:image" content={image} />
      </>
    ) : null}
  </>
);

export { Meta };
