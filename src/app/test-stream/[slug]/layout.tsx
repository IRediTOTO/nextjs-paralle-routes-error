// import AlgoliaSearch from "@/components/common/algolia-search/algolia-search";

import { ReactNode } from "react";

export const revalidate = 60;

export default async function Layout(props: {
    params: { slug: string };
    children: ReactNode;
    partOne: ReactNode;
    partTwo: ReactNode;
    partThree: ReactNode;
}) {
    const {
        params: { slug },
        children,
        partOne,
        partThree,
        partTwo,
    } = props;

    return (
        <>
            <div className="container pt-5">
                <div className="grid grid-flow-row md:grid-cols-2 gap-5">
                    {partOne}
                    {partTwo}
                    {partThree}
                </div>
            </div>
        </>
    );
}
