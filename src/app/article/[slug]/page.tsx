const Article = async ({ params }: { params: { slug: string } }) => {
  return <p>{params.slug}</p>;
};

export default Article;
