import React from "react"
import ContentLoader from "react-content-loader"

export const FilmLoader = (props) => (
    <ContentLoader
        speed={1}
        width={302}
        height={590}
        viewBox="0 0 400 800"
        backgroundColor="#091718"
        foregroundColor="#0e1f20"
        {...props}
    >
        <rect x="0" y="120" rx="10" ry="10" width="380" height="650" />
    </ContentLoader>
)
