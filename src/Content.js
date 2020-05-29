import React from "react";
import { Flex, Box, Image } from "rebass";
import logo from "./logo.svg";
import GalleryProvider from "./GalleryProvider";
import Gallery from "./Gallery";
import Pagination from "./Pagination";

const Content = () => (
  <Flex flexWrap="wrap" align="center" flexDirection="column" width={1} p={3}>
    <Box as="header">
      <Image src={logo} />
    </Box>
    <Box
      my={1}
      sx={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "primary",
      }}
    />
    <GalleryProvider>
      {({ photos, fetchData, page }) => {
        console.log("GalleryProvider:", { page });
        return photos ? (
          <>
            <Gallery photos={photos} />
            <Pagination fetchData={fetchData} page={page} />
          </>
        ) : (
          "loading"
        );
      }}
    </GalleryProvider>
  </Flex>
);

export default Content;
