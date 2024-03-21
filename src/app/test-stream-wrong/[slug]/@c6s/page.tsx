export const revalidate = 60;

const Page = async ({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams: { "cm-page": string };
}) => {
    await new Promise((resolver) => {
        setTimeout(resolver, 6000);
    });

    return (
        <>
            <div>Part 2</div>
        </>
    );
};

export default Page;
