/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
interface PageHeadProps {
  title: string;
  description?: string;
  image?: {
    url?: string;
    alt?: string;
  };
  article?: {
    published_at: string | Date | null;
    updated_at: string | Date | null;
    author?: string;
    tags: string[];
  };
  favicon?: string;
}

export const PageHead = ({
  title,
  description,
  image,
  article,
  favicon,
}: PageHeadProps) => {
  return (
    <Head data-testid="page-head">
      <title>{title}</title>
      <meta name="description" content={description}></meta>

      {/* OPEN GRAPH */}
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:site_name" content={title} key="ogsitename" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta property="og:image" content={image?.url} key="ogimage" />
      <meta property="og:image:width" content="420" />
      <meta property="og:image:height" content="300" />
      <meta property="og:image:alt" content={image?.alt} />

      {/* ARTICLE */}
      <meta property="article:section" content="Blog" />
      <meta property="article:author" content={article?.author} />
      <meta
        property="article:published_time"
        content={String(article?.published_at || "")}
      />
      <meta
        property="article:modified_time"
        content={String(article?.updated_at || "")}
      />
      {article?.tags?.map((tag) => (
        <meta
          data-testid={`_meta_tag_${tag}`}
          property="article:tag"
          content={tag}
          key={tag}
        />
      ))}

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@use.react" />
      <meta name="twitter:creator" content={article?.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image?.url} />
      <meta name="twitter:image:alt" content={image?.alt} />

      <link
        rel="shortcut icon"
        type="image/jpg"
        href={favicon || "/favicon-32x32.png"}
      />
    </Head>
  );
};
