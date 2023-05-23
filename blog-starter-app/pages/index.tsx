import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts: Post[] = allPosts.slice(1);
  /*[
    {
      title: "test",
      content: "testesst",
      author: {
        name: "fulano",
        picture:
          "https://2.bp.blogspot.com/-aGdxd845u6g/TZoVQ_1GOfI/AAAAAAAACl4/wzbCjAJgvbQ/s1600/fulano.jpg",
      },
      navigateTo: "musics",
      coverImage: '/assets/blog/preview/cover.jpg',
      date: '2020-12-20T00:00:00',
      ogImage: {url:'/assets/blog/preview/cover.jpg'},

      excerpt:'asdasd'
      
    },
  ];*/
  return (
    <>
      <Layout>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <Intro title="Brazilian Songs Analysis.">
            A web-project produced to explore concepts learned in the{" "}
            <a
              href="https://sites.google.com/a/ecomp.uefs.br/joao/home/courses/exa844"
              className="underline hover:text-blue-600 duration-200 transition-colors"
            >
              EXA844
            </a>{" "}
            course.
          </Intro>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
