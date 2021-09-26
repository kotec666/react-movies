import React from "react"
import ContentLoader from "react-content-loader"

export const FilmDetailImgLoader = (props) => (
    <ContentLoader
        speed={1}
        width={610}
        height={860}
        viewBox="0 0 610 860"
        backgroundColor="#091718"
        foregroundColor="#0c2527"
        {...props}
    >
        <rect x="0" y="0" rx="10" ry="10" width="580" height="820" />
    </ContentLoader>
)

