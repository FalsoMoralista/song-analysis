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
  const morePosts: Post[] = [
    {
      title: "Sailing in dark waters: quantifying music complexity",
      content: "testesst",
      author: {
        name: "Luciano Dourado",
        picture:
          "assets/blog/authors/author.JPG",
      },
      navigateTo: "quantifying_complexity",
      coverImage: '/assets/blog/dynamic-routing/IMG_1923.jpg',
      date: '2023-05-28T01:45:00',
      ogImage: {url:'/assets/blog/preview/cover.jpg'},

      excerpt: ` When comes down to music, complexity becomes tricky to measure not only due to subjectivity but to the many other aspects that can be related 
      together in order to enable a more robust estimation and concise approach. Complexity can be defined, for example, in terms of many parameters 
      related to concepts that may involve music theory (e.g., harmony, rythm), lyrical aspects such as poetic synthesis, etc.`
    },
    {
      title: "Songs Complexity Analysis",
      content: "testesst",
      author: {
        name: "Luciano Dourado",
        picture:
        "assets/blog/authors/author.JPG",
      },
      navigateTo: "statistics",
      coverImage: '/assets/blog/dynamic-routing/IMG_1932.jpg',
      date: '2023-05-26T00:00:00',
      ogImage: {url:'/assets/blog/preview/cover.jpg'},

      excerpt:' '      
    },
    {
      title: "Search songs",
      content: "testesst",
      author: {
        name: "Luciano Dourado",
        picture:
        "assets/blog/authors/author.JPG",
      },
      navigateTo: "songs",
      coverImage: '/assets/blog/dynamic-routing/IMG_1756.jpg',
      date: '2022-05-26T02:24:00',
      ogImage: {url:'/assets/blog/preview/cover.jpg'},

      excerpt:`Check the list of songs available in the database.`
      
    },        
    {
      title: "My song entropy",
      content: "testesst",
      author: {
        name: "Luciano Dourado",
        picture:
        "assets/blog/authors/author.JPG",
      },
      navigateTo: "analyze_my_song",
      coverImage: '/assets/blog/dynamic-routing/entropy2.png',
      date: '2023-05-26T00:00:00',
      ogImage: {url:'/assets/blog/preview/cover.jpg'},

      excerpt:'Provide a song\'s information and analyze its complexity in relation to other songs in the dataset.'
      
    }    
   ]
  //allPosts.slice(1);
  /*[
    {
      title: "test",
      content: "testesst",
      author: {
        name: "fulano",
        picture:
          "/assets/blog/dynamic-routing/cover1.jpg",
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
