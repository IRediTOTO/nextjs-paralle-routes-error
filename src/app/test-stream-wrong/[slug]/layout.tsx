// import AlgoliaSearch from "@/components/common/algolia-search/algolia-search";

import { ReactNode } from "react";

export const revalidate = 60;

export default async function Layout(props: {
    params: { slug: string };
    children: ReactNode;
    'a9s': ReactNode;
    b3s: ReactNode;
    c6s: ReactNode;
}) {
    const {
        params: { slug },
        children,
       a9s,b3s,c6s
    } = props;

    return (
        <>
            <div className="container pt-5">
                <div className="grid grid-flow-row md:grid-cols-2 gap-5">
                    {c6s}
                    {b3s}
                    {a9s}
                </div>
            </div>
        </>
    );
}
