export const revalidate = 60;

const Page = async ({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams: { "cm-page": string };
}) => {
   
    return (
        <>
            <div>Part 1</div>
        </>
    );
};

export default Page;
