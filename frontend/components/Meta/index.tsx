import Head from "next/head";

interface MetaProps {
  title: string;
  description: string;
  keyword: string;
}

const Meta = ({ title, description, keyword }: MetaProps) => {
  return (
    <Head>
      <title>{title}</title>
            <meta name="keyword" content={keyword} />
            <meta name='descripiton' content={description} />
            <meta charSet='utf-8' />
            <meta name="google-analytics" content="1-AHFKALJ"/>
            <meta name="author" content="Ashab Uddin, ashabuddin34@gmail.com"></meta>
            <meta name="subject" content="your website's subject"></meta>
            <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Ecomerce website",
  description: "choich your favurite product",
  keyword: "online shop,ecommerce",
};

export default Meta;
