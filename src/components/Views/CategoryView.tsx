'use client';

const CategoryView = ({ categoryUuid }: { categoryUuid: string }) => {
  return (
    <main
      style={{
        paddingBottom: '3rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '1rem 2rem',
      }}
    >
      <p>{categoryUuid}</p>
    </main>
  );
};

export default CategoryView;
