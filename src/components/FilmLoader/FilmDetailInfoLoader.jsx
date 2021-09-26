import React from "react"
import ContentLoader from "react-content-loader"

export const FilmDetailInfoLoader = (props) => (
    <ContentLoader
        speed={1}
        width={1000}
        height={860}
        viewBox="0 0 1000 860"
        backgroundColor="#091718"
        foregroundColor="#0c2527"
        {...props}
    >
        <rect x="60" y="0" rx="10" ry="10" width="997" height="56" />
        <rect x="60" y="98" rx="10" ry="10" width="997" height="252" />
        <rect x="60" y="396" rx="10" ry="10" width="300" height="42" />
        <rect x="60" y="457" rx="10" ry="10" width="300" height="42" />
        <rect x="60" y="517" rx="10" ry="10" width="300" height="42" />
        <rect x="60" y="576" rx="10" ry="10" width="300" height="42" />
        <rect x="60" y="637" rx="10" ry="10" width="300" height="42" />
        <rect x="60" y="697" rx="10" ry="10" width="300" height="42" />
    </ContentLoader>
)

