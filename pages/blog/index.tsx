import MoreStories from "../../components/blog/moreStories";
import HeroPost from "../../components/blog/heroPost";
import Intro from "../../components/blog/intro";
import { getAllPosts } from "../../lib/blog-api";
import Post from "../../lib/interfaces/IPost";
import Container from "../../components/common/container";
import PageWrapper from "../../components/header/pageWrapper";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <PageWrapper title="Blog">
      <Container>
        <Intro />
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
        {morePosts.length > 0 ? <MoreStories posts={morePosts} /> : <></>}
      </Container>
    </PageWrapper>
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
