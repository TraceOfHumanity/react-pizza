import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#d1d1d1"
    foregroundColor="#ffffff"
  >
    <circle cx="136" cy="136" r="136" />
    <rect x="0" y="286" rx="0" ry="0" width="279" height="23" />
    <rect x="0" y="332" rx="0" ry="0" width="280" height="54" />
    <rect x="0" y="408" rx="0" ry="0" width="122" height="39" />
    <rect x="143" y="407" rx="21" ry="21" width="136" height="40" />
  </ContentLoader>
);

export default MyLoader;
