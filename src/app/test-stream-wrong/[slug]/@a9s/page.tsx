export const revalidate = 60;

const Page = async ({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams: { "cm-page": string };
}) => {
    await new Promise((resolver) => {
        setTimeout(resolver, 9000);
    });
    return (
        <>
            <div>Part 1</div>
        </>
    );
};

export default Page;
